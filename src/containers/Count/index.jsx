import CountUI from "../../components/Count";
// import store from "../../redux/store";
// 引入connect链接ui和redux
import { connect } from "react-redux";
import {createIncrementAction} from "../../redux/count_action";

// mapStateToProps的返回值作为状态传递给了UI组件
function mapStateToProps(state){
    return {count: state}
}

// mapDispatchToProps的返回值作为操作状态的方法传递给了UI组件
function mapDispatchToProps(dispatch){
    return {jia: data=> dispatch(createIncrementAction(data))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
