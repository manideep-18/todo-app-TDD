import React, { Component } from 'react'
import { TodoInputBg, TodoInputBox } from './styledComponents';

 class TodoInput extends Component {
    render() {
        return (
            <TodoInputBg>
                <TodoInputBox   type="text"  />
            </TodoInputBg>
        )
    }
}
export default TodoInput;