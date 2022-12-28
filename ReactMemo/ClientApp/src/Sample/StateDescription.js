// StateDescription.js
import React from 'react';

class StateDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "React",
            message:"state 개체를 사용하여 클래스 컴포넌트에서 상태 관리",
        }
    }

    /* 생성자
     * 클래스에서 사용할 수 있는 기능
     * StateDescription 해당 컴포넌트(인스턴스)가 만들어질 때 제일 먼저 호출되는 메서드 
     * 1. super(); 함수를 호출해서 기본 기능 호출
     * 2. 나 자신의 기능 수행 => 개체 리터럴로 표현 {속성 : "값"}
     * state 개체에 원하는 값을 넣어 놓고 사용할 수 있음
     * */

    render() {
        return (
            <h3>{this.state.title} - {this.state.message}</h3>
        );
    }
}

export default StateDescription;