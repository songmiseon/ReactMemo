import React from 'react';

function Demo1() {
    return (
        <div>
            <h2>React</h2>
            <h2>Angular</h2>
        </div>
    );
}

function Demo2() {
    return (
        <React.Fragment>
            <h2>Vue</h2>
            <h2>Blazor</h2>
        </React.Fragment>
    );
}

function Demo3() {
    return (
        <>
            <h2>ASP.NET Core</h2>
            <h2>Spring Boot</h2>
        </>
    );
}

function ReactFragmentDemo() {
    return (
        <div>
            <Demo1 />
            <Demo2 />
            <Demo3 />
        </div>
    );
}
/* 하나의 컴포넌트는 반드시 시작과 끝이 명확해야 함
 * 형제 노드가 여러개 있으면 상위에 하나의 태그로 묶어줘야 함
 * 단점 : 일반적으로 div 태그를 사용하지만 불필요한 div 태그를 사용해야 함
 * 해결 방법 => React.Fragment 태그 사용
 * F12로 렌더링 결과를 보면 React.Fragment는 아무런 표시가 없음
 * 따라서 Demo1보다 Demo2 사용을 권장함
 * 
 * Demo3 처럼 React.Fragment 없이 <></>로 표현도 가능함*/
export default ReactFragmentDemo;