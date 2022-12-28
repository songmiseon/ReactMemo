// OnClickEventHandler.js

import React from 'react';

function btnClick() {
    console.log('3. 함수 직접 호출');
}

function OnClickEventHandler() {
    return (
        <>
            <h1>OnClickEventHandler</h1>
            <p>
                <button onClick={function () { console.log('1. 무명 메서드 호출'); }} >
                    1. 무명 메서드 호출
                </button>
            </p>

            <p>
                <button onClick={ () => { console.log('2. 화살표 함수 사용 호출'); }} >
                    2. 화살표 함수 사용 호출
                </button>
            </p>

            <p>
                <button onClick={ btnClick } >{/* 함수 이름(포인터)이 옴 */}
                    3. 함수 직접 호출
                </button>
            </p>
        </>
    );
}

export default OnClickEventHandler;