import React, { Component } from 'react'
import { TodoInputBg, TodoInputBox } from './styledComponents';

 class TodoInput extends Component {
    render() {
        return (
            <TodoInputBg>
                <TodoInputBox   type="text" placeholder="what needs to be done..." />
            </TodoInputBg>
        )
    }
}
export default TodoInput;