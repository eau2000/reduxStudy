// import CountUI from "../../components/Count";
// import store from "../../redux/store";
// 引入connect链接ui和redux
import { connect } from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/actions/count";

// mapStateToProps的返回值作为状态传递给了UI组件,返回一个对象
// function mapStateToProps(state){
//     return {count: state}
// }
// const mapStateToProps = state => ({count: state})

// mapDispatchToProps的返回值作为操作状态的方法传递给了UI组件,返回一个对象
// function mapDispatchToProps(dispatch){
//     return {jia: data=> dispatch(createIncrementAction(data)),
//         jian: data => dispatch(createDecrementAction(data)),
//         jiaAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     jia: data=> dispatch(createIncrementAction(data)),
//     jian: data => dispatch(createDecrementAction(data)),
//     jiaAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

import React, {Component} from 'react';
// import store from "../../redux/store";
// import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

class Count extends Component {
    // state = {count:0}
    state = {car:'劳斯莱斯'}
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
        // 通知redux加value
        // store.dispatch(createIncrementAction(value*1))
    }
    // componentDidMount() {
    //     // 检测redux中状态变化，只要变化就调用render
    //     // redux里面任何状态改变都会执行回调
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
        // store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        // const count = store.getState()
        // if(count%2 !== 0){
        // store.dispatch(createIncrementAction(value*1))
        // }
        if (this.props.count%2!==0){
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        // setTimeout(() => {
        // store.dispatch(createIncrementAsyncAction(value*1, 3000))
        // },1000)
        this.props.jiaAsync(value*1,500)
    }
    render() {
        return (
            <div>
                {/*<h1>当前求和为{store.getState()}</h1>*/}
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数再来加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        );
    }
}


export default connect(
    state => ({count: state}),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia: data=> dispatch(createIncrementAction(data)),
    //     jian: data => dispatch(createDecrementAction(data)),
    //     jiaAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
    // })
    // mapDispatchToProps的精简写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)
