import {createStore, applyMiddleware} from "redux";
import countReducer from './count_reducer'

// 引入react-thunk支持异步action
import thunk from 'redux-thunk'

const store = createStore(countReducer, applyMiddleware(thunk));

export default store
