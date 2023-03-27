import React, {useState} from 'react';

function Counter() {

    //  스타일 선언하기
    const style = {
        width:'200px',
        padding:'10px',
        margin:'10px',
        border:'3px solid black',
        textAlign:'center'
    }

    // useState 공식
    // const [값변수, 값변경함수] = useState(기본값);
    // const 값변경 함수 =()=> {변경될 코드 작성} return();


    // num - 지정될 숫자 - 변수에 담기
    const [num, setNum] = useState(1);

    // 1씩 증가하는 함수
    const onIncrease =()=>{
        setNum(num + 1);
    }

    // 1씩 감소하는 함수
    const onDecrease =()=>{
        if(num === 1){
            setNum(1);
        }else{
            setNum(num - 1);
        }
    }

    return (
        <>
            <h2>React Hooks</h2>
            <ul>
                <li>
                    Hooks는 리액트 버전 16.9부터 추가되었습니다.
                </li>
                <li>
                    Hooks가 나온 것은 함수 컴포넌트가 리액트의 몇 가지 기능에 접근할 수 없었던 것을 접근하게 해주기 위해서입니다.
                </li>
                <li>
                    Hooks를 사용하는 이유는 state 및 라이프사이클에 함수 컴포넌트가 접근할 수 있게 합니다.
                </li>
            </ul>

            <p>
                Hooks는 React의 함수 컴포넌트 내에서만 호출할 수 있습니다.
                <br />
                - Hooks는 컴포넌트의 최상위 수준에서만 호출할 수 있습니다.
                <br />
                - Hooks는 조검부일 수 없습니다.
            </p>


            <div style={style}>
                <h3>값 변화: {num}</h3>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </>
    );
}

export default Counter;