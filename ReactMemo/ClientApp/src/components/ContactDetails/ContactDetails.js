import React, { Component } from "react";

export class ContactDetails extends Component {
    render(){
        const phoneNumber = "114";
        let address = "세종시";

        return (
            <ul>
                <li>전화번호: { phoneNumber }</li>
                <li>주소: { address }</li>
            </ul>
            /* 전화번호와 주소를 변수 처리 => 상수와 변수 활용 가능 */
        );
    }
}