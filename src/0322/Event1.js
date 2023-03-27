import React from 'react';

function Event1(props) {

    const onShot01 =()=>{
        alert('버튼이벤트 실행');
    };

    const onShot02 =(text)=>{
        alert(text);
        console.log(text);
    };

    const test =(a, b)=>{
        alert(a);
        alert(b.type); // type: js에서 데이터의 형식을 알려주는 명령어
    }

    return (
        <>
            <h2>리액트 이벤트</h2>
            <p>
                이벤트란. 사용자가 웹브라우저에서 DOM요소들과 상호작용하는 것입니다.
            </p>
            <p>
                리액트는 html과 동일한 이벤트를 갖습니다.
            </p>
            <p>
                이벤트는 DOM요소에만 줄 수 있고, 우리가 생성한 컴포넌트에는 줄 수 없습니다.
            </p>
            <p>
                기존 javascript: addEventListener, onclick
            </p>
            <p>
                리액트에서는 onClick으로 작성해야 한다. (대문자 조심)
            </p>
            <p>
                함수형 콤포넌트일 경우 onClick=&#123;함수명&#125;
            </p>
            <p>
                클래스형 콤포넌트일 경우는 onClick=&#123;this.함수명&#125;
            </p>

            <button onClick={onShot01}>클릭하세요1</button>
            <button onClick={()=>onShot02('매개변수가 있어야 출력이 됩니다 선생님.')}>클릭하세요2</button>


            <p>
                매개변수가 없으면 그냥 이름만 작성하면 되지만, 매개변수가 있으면 익명함수를 추가해야 합니다.
            </p>

            <hr />

            <p>
                이벤트 핸들러는 함수를 호출한 React이벤트에 접근할 수 있습니다.
            </p>
            <p>
                매개변수에 문자내용을 적으면 내용이 출력되지만 event객체를 적으면 이벤트 내용이 출력됨.(e.type)
            </p>
            <p>
                type은 이벤트객체의 타입명을 반환하는 속성입니다. 이건 js의 이벤트 객체 속성입니다.
            </p>
            <button onClick={(event)=>test('클릭하세요', event)}>클릭해보세요</button>
        </>
    );
}

export default Event1;