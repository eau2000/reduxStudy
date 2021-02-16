import React, {Component} from 'react';

class Person extends Component {
    addPerson = () => {
        const name = this.name.value
        const age = this.age.value
        console.log(name,age)
    }
    render() {
        return (
            <div>
                <input ref={c=>this.name=c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.age=c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>名字1，年龄2</li>
                    <li>名字1，年龄2</li>
                    <li>名字1，年龄2</li>
                </ul>
            </div>
        );
    }
}

export default Person;
