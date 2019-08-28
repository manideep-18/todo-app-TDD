import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoInput from '.';
describe('TodoInput Testsuit', () => {
    it('should test TodoInputBox is rendered',()=>{
        const {getByPlaceholderText}=render(<TodoInput/>)
        const todoInput=getByPlaceholderText('what needs to be done...');
        expect(todoInput).toBeDefined();
    })
})
