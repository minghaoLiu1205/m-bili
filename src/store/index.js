// createStore方法是用来创建store的，combineReducers方法是用来合并多个reducer的
import { createStore, combineReducers } from 'redux';
import breadcrumb from './reducers/breadcrumb';
import userPermission from './reducers/userPermission';
import orderMgt from './reducers/orderMgt';

// 创建根reducer，利用combineReducers合并多个reducer，此处还未定义reducer，所以暂空
const rootReducer = combineReducers({
  breadcrumb,
  userPermission,
  orderMgt
})

// 创建初始化的state，初始化为一个空对象即可，默认的数据建议都写在reducer上
// const initializeState = {}; // 定义初始化的state

// 创建store，第一个参数是根reducer，第二个参数可以是初始化的state，也可以是别的，暂且不提
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 抛出store
export default store;
