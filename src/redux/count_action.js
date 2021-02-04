import { INCREMENT, DECREMENT } from "./constant";
// import store from "./store";

export const createIncrementAction =  data => ({type: INCREMENT, data})

export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action，action值为函数
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            // store.dispatch( createIncrementAction(data))
            dispatch( createIncrementAction(data))
        }, time)
    }
}
