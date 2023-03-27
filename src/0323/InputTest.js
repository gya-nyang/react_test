import React, {useState} from 'react';

function Input_test() {

    // 스타일 변수
    const style = {
        width:'300px',
        padding:'10px',
        margin:'10px',
        border:'3px solid #000'
    }

    // useState() - 값이 변화되는 것을 저장
    // const [값변수, 값변경함수] = useState(기본값);
    const [text, setText] = useState(''); //기본값 없음

    //  state 값이 변화되는 함수 - input에 쓴 값으로 변경하기 위함
    const onTextChange =(e)=>{
        setText(e.target.value); // 이벤트를 받는 타겟의 value값으로 변경된다.
    }

    // 값을 초기화시켜주는 함수 - 버튼에 적용한다.
    const onDataReset =()=>{
        setText('');
    }

    return (
        <>
            <h2>입력상자 기본 요소 처리</h2>
            <p>
                입력상자(input)에 데이터를 입력하면 다른 요소에 데이터로 바로 보여주는 예제
            </p>
            <div style={style}>
                <input type="text" onChange={onTextChange} value={text} />
                <button onClick={onDataReset}>데이터 초기화</button>
                <h3>값: {text}</h3>
            </div>
            <p>
                1. input 태그에 state값을 관리하기 위해 useState 함수를 사용한다.
            </p>
            <p>
                2. input태그에 글자를 입력하면 onChange이벤트를 사용해서 값이 변할 때 state값이 변경되도록 한다.
            </p>
            <p>
                3. 버튼 태그를 클릭하면 onClick이벤트를 사용하여 값을 초기화한다.
            </p>
        </>
    );
}

export default Input_test;