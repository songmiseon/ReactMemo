import React from 'react';

const todoItems = [
    {id:1, title:"React 학습", isDone:true},
    {id:2, title:"JavaScript 학습", isDone:true},
    {id:3, title:"ASP.NET Core 학습", isDone:false},
]

function TodoItem(props){
    
    const isDoneStyle = {
        textDecoration:"line-through"
    };

    return (
        <>
            <li>
                <input 
                    type="checkbox"
                    checked={ props.item.isDone }
                    onChange={() => props.handleCheckedChange(props.item.id)}
                ></input>
                <span style={props.item.isDone ? isDoneStyle : null}>{ props.item.title }</span>
            </li>
        </>
    );
}

class TodoListInMemory extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todoItems,
        };
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
    }

    handleCheckedChange(id){
        this.setState(prev => {
            const modified = prev.todos.map(todo => {
                if(todo.id === id){
                    todo.isDone = !todo.isDone;
                }
                return todo;
            });
            return {
                todos:modified
            }
        });
    }

    render(){
        const todos = this.state.todos.map( (todo) => <TodoItem key={todo.id} item={todo} handleCheckedChange={this.handleCheckedChange} /> );

        return(
            <>
                <h3>초간단 인-메모리 TODO 리스트</h3>
                <ul>
                    { todos }
                </ul>
            </>
        )
    }
}

export default TodoListInMemory;