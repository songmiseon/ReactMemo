import React, { useState, useEffect } from 'react';

// useEffect Hook을 사용하여 페이지 로드할 때 필요한 기능 수행
function UseEffectDemo() {

    const [agree, setAgree] = useState(false);

    //useEffect(() => {
    //    console.log("페이지 로드 또는 UI 변경");
    //});

    useEffect(() => {
        console.log("페이지 로드");
    },[]);

    return (<>
        <h1>UseEffectDemo</h1>
        <input
            type="checkbox"
            value={agree}
            onChange={() => setAgree(agree => !agree)} />
            { agree ? "동의함" : "동의하지 않음" }
    </>);

}

export default UseEffectDemo;