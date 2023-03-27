import React from 'react';

function child() {

    const userName = '홍길동';
    // const score = prompt('점수를 입력하세요')


    return (
        <>
            <h2>React JSX문법 익히기</h2>
            <p>
                JSX는 JAVASCRIPT XML의 약자로서 리액트에서 UI를 표현하고자 할 때 사용하는 문법이다.
            </p>
            <p>
                자바스크립트의 확장문법이며, SML언어와 비슷함.
            </p>
            <p>
                장점: html코드 작성법과 비슷하기 때문에 보기 쉽고 익숙하다. 
                <br/>
                콤포넌트들도 html태그를 쓰듯이 그냥 작성하여 활용도가 높다.
            </p>
            <ol>
                <li>
                    태그는 최상위 요소로 감싸야 한다. div태그보단 빈 요소로 사용하는 것이 좋다.
                </li>
                <li>
                    반드시 닫는 태그요소가 있어야 한다.
                </li>
                <li>
                    JSX표현식 - 중괄호 안에 변수나 속성이 들어감. &#123; 변수, 속성 &#125;
                </li>
                <li>
                    JSX표현식 안에서는 주석 사용은 /* */만 사용 가능
                </li>
                <li>
                    조건부 랜더링
                    <br />
                    조건식 ? 참표현식 : 거짓표현식
                </li>
                <li>
                    리액트에서 css 적용하는 방법 7가지
                </li>
                <li>
                    외부스타일 서식 적용하기
                </li>
            </ol>

            <p>
                표현식 작성하기 5+5={5+5}
            </p>
            <p>
                환영합니다. <b>{userName}</b> 님
            </p>
            <p>
                {/* 메세지 띄우기: {alert('환영합니다.')} */}
            </p>
            <p>
                삼항조건연산자를 사용하여 연산식 만들기
                {/* {score > 60? (<strong>합격</strong>) : (<strong>불합격</strong>)} */}
            </p>

        </>
    );
}

export default child;