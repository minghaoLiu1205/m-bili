import { findDOMNode } from 'react-dom';
import { delay } from 'core-js';

const printElement = options => {
  const {
    content,
    pageStyle,
    onBeforePrint,
    onAfterPrint,
    bodyClass = '',
    copyStyles = true,
  } = options;

  const contentEl = content;

  if (contentEl === undefined || contentEl === null) {
    console.error(
      "Refs are not available for stateless components. For 'react-to-print' to work only Class based components can be printed"
    ); // eslint-disable-line no-console
    return;
  }

  const printWindow = document.createElement('iframe');
  printWindow.style.position = 'absolute';
  printWindow.style.top = '-1000px';
  printWindow.style.left = '-1000px';

  // eslint-disable-next-line
  const contentNodes = findDOMNode(contentEl);
  const linkNodes = document.querySelectorAll('link[rel="stylesheet"]');

  const linkTotal = linkNodes.length || 0;
  const linksLoaded = [];
  const linksErrored = [];

  const removeWindow = target => {
    setTimeout(() => {
      target.parentNode.removeChild(target);
    }, 500);
  };

  const triggerPrint = target => {
    if (onBeforePrint) {
      onBeforePrint();
    }

    setTimeout(() => {
      target.contentWindow.focus();
      target.contentWindow.print();
      removeWindow(target);

      if (onAfterPrint) {
        onAfterPrint();
      }
    }, 500);
  };

  const markLoaded = (linkNode, loaded) => {
    if (loaded) {
      linksLoaded.push(linkNode);
    } else {
      console.error(
        "'react-to-print' was unable to load a link. It may be invalid. 'react-to-print' will continue attempting to print the page. The link the errored was:",
        linkNode
      ); // eslint-disable-line no-console
      linksErrored.push(linkNode);
    }

    // We may have errors, but attempt to print anyways - maybe they are trivial and the user will
    // be ok ignoring them
    if (linksLoaded.length + linksErrored.length === linkTotal) {
      triggerPrint(printWindow);
    }
  };

  printWindow.onload = () => {
    /* IE11 support */
    if (window.navigator && window.navigator.userAgent.indexOf('Trident/7.0') > -1) {
      printWindow.onload = null;
    }

    const domDoc = printWindow.contentDocument || printWindow.contentWindow.document;
    const srcCanvasEls = [...contentNodes.querySelectorAll('canvas')];

    domDoc.open();
    domDoc.write(contentNodes.outerHTML);
    domDoc.close();

    /* remove date/time from top */
    const defaultPageStyle =
      pageStyle === undefined
        ? '@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } } html,body { overflow: auto!important; height: auto!important; }'
        : pageStyle;

    const styleEl = domDoc.createElement('style');
    styleEl.appendChild(domDoc.createTextNode(defaultPageStyle));
    domDoc.head.appendChild(styleEl);

    if (bodyClass.length) {
      domDoc.body.classList.add(bodyClass);
    }

    const canvasEls = domDoc.querySelectorAll('canvas');
    [...canvasEls].forEach((node, index) => {
      node.getContext('2d').drawImage(srcCanvasEls[index], 0, 0);
    });

    if (copyStyles !== false) {
      const headEls = document.querySelectorAll('style, link[rel="stylesheet"]');

      [...headEls].forEach((node, index) => {
        if (node.tagName === 'STYLE') {
          const newHeadEl = domDoc.createElement(node.tagName);

          if (node.sheet) {
            let styleCSS = '';

            for (let i = 0; i < node.sheet.cssRules.length; i++) {
              // catch 'member not found' error on cssText
              if (typeof node.sheet.cssRules[i].cssText === 'string') {
                styleCSS += `${node.sheet.cssRules[i].cssText}\r\n`;
              }
            }

            newHeadEl.setAttribute('id', `react-to-print-${index}`);
            newHeadEl.appendChild(domDoc.createTextNode(styleCSS));
            domDoc.head.appendChild(newHeadEl);
          }
        } else {
          const attributes = [...node.attributes];

          const hrefAttr = attributes.filter(attr => attr.nodeName === 'href');
          const hasHref = hrefAttr.length ? !!hrefAttr[0].nodeValue : false;

          // Many browsers will do all sorts of weird things if they encounter an empty `href`
          // tag (which is invalid HTML). Some will attempt to load the current page. Some will
          // attempt to load the page's parent directory. These problems can cause
          // `react-to-print` to stop  without any error being thrown. To avoid such problems we
          // simply do not attempt to load these links.
          if (hasHref) {
            const newHeadEl = domDoc.createElement(node.tagName);

            attributes.forEach(attr => {
              newHeadEl.setAttribute(attr.nodeName, attr.nodeValue);
            });

            newHeadEl.onload = markLoaded.bind(null, newHeadEl, true);
            newHeadEl.onerror = markLoaded.bind(null, newHeadEl, false);
            domDoc.head.appendChild(newHeadEl);
          } else {
            console.warn(
              "'react-to-print' encountered a <link> tag with an empty 'href' attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",
              node
            ); // eslint-disable-line no-console
            markLoaded(node, true); // `true` because we've already shown a warning for this
          }
        }
      });
    }

    if (linkTotal === 0 || copyStyles === false) {
      triggerPrint(printWindow);
    }
  };

  document.body.appendChild(printWindow);

  return delay(1000);
};

export default printElement;

