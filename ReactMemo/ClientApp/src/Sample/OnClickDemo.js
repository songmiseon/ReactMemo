import React from 'react';

export class OnClickDemo extends React.Component {
    render() {
        return (
            <>
                <h2>OnClickDemo</h2>
                <button onClick={() => { window.alert("클릭이벤트 발생") }}>
                    클릭이벤트
                </button>
            </>
        );
    }
}

export default OnClickDemo;