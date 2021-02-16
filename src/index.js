import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
// import store from "./redux/store";
import store from "./redux/store";
import {Provider} from 'react-redux'
// 只要需要store的容器都能获得store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'))
// })
