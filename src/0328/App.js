import React from 'react';
import Ref from './Ref';
import Food from './Food';

function App() {
    return (
        <>
            <h2>Ref</h2>
            <ul>
                <li>
                    ref는 개발자가 특정 DOM을 선택해야 하는 상황이 발생될 때 사용한느 기능으로 클래스 컴포넌트에서 사용하지만 hooks에서 useRef함수가 추가되면서 함수형 콤포넌트에서도 사용이 가능합니다.
                </li>
                <li>
                    js에서 dom을 선택할 때 querySelector, getElementById를 사용합니다.
                </li>
                <li>
                    리액트의 JSX 안에서 DOM에 id를 달면 해당 DOM을 랜더링할 때 그대로 전달됩니다.
                </li>
                <li>
                    컴포넌트가 여러개 생성되는 경우 같은 id가 중복되서 에러가 발생될 수 있습니다.
                </li>
                <li>
                    하지만 ref는 전역적으로 작동하지 않고, 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 발생되지 않습니다.
                </li>
                <li>
                    dom을 꼭 사용해야 하는 상황 - 특정 input에 포커스 주기, 스크롤박스 조작, canvas요소에 그림그리기 등...
                </li>
            </ul>
            <p>
                hooks는 리액트 16.8버전 이후부터 지원됩니다.
            </p>


            <Ref />
            <hr />
            <Food />
        </>
    );
}

export default App;