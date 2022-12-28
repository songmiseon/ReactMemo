import React from 'react';

const todoItems = [
    { id:1, title:"React 학습", isDone:true },
    { id:2, title:"JavaScript 학습", isDone:true },
    { id:3, title:"ASP.NET Core 학습", isDone:false },
];

function TodoItem(props){
    return (
        <>
            <li>
                <input type="checkbox" checked={props.item.isDone} />
                {props.item.title} 학습
            </li>
        </>
    )
}

function TodoListInMemory(){
    const todos = todoItems.map((todo) => <TodoItem key={todo.id} item={todo} />);

    return(
        <>
            <h3>초간단 인-메모리 TODO 리스트</h3>
            <ul>
                { todos }
                {/* <TodoItem />
                <TodoItem />
                <TodoItem /> */}

                {/*
                상단처럼 별도 컴포넌트화시키기
                <li>
                    <input type="checkbox"></input>
                    React 학습
                </li>
                <li>
                     <input type="checkbox"></input>
                    C# 학습
                </li>
                <li>
                     <input type="checkbox"></input>
                    ASP.NET Core Web API 학습
                </li> */}
            </ul>
        </>
    );
}

export default TodoListInMemory;