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
                <input type="checkbox" checked={props.item.isDone} /* onChange={  }  */ /> {/* 주석 부분이 없으면 오류 발생, 주석 부분이 있으면 오류 없어지고 해당 요소 클릭시 오류 발생 */}
                {props.item.title}
            </li>
        </>
    )
}

function TodoListInMemory(){
    /* map 기본 구문
        arr.map(function(element, index, array){  }, this);

        콜백함수 function()은 각 배열 요소에 대해 호출되며,
        map() 메소드는 언제나 현재의 element와 그것의 index,
        그리고 전체 array 객체를 해당 요소에 전달
     */
    const todos = todoItems.map( (todo) => <TodoItem key={todo.id} item={todo} />);
    /* const todos = todoItems.map( function(todo){ <TodoItem key={todo.id} item={todo}/>} ); 맞는지 확인 안 됨*/

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