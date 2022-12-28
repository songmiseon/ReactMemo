import React, { useState } from 'react';
// useState 훅(Hook) import

// useState()를 사용하여 함수형 컴포넌트에서 상태 관리
function FunctionStateDemo() {
    const [myMessage, setMyMessage] = useState("Hi")
          // 속성값, 메서드(함수)
    return (<>
        <h1>{myMessage}</h1>
        <button onClick={() => setMyMessage("Hello")}>
            Hello
        </button>
        <button onClick={() => setMyMessage("Bye")}>
            Bye
        </button>
    </>);
}

export default FunctionStateDemo;