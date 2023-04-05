import React, {useState} from 'react';

function ProductDetail() {

    // 제품 가격 기본값
    const price = 2900;

    // state변수
    // num(변수명), setNum(함수명)
    const [num, setNum] = useState(1);

    // 입력요소에 사용자가 직접 입력하면 데이터 변경
    const onDataChange =(e)=>{
        setNum(e.target.value);
    }

    // +버튼 누르면 함수가 호출되어 1씩 증가
    const onIncrease =()=>{
        setNum(Number(num) + 1);
        console.log(num);
    }

    // -버튼 누르면 함수가 호출되어 1씩 감소
    const onDecrease =()=>{
        if(num>1){
            setNum(Number(num) - 1);
        }
        console.log(num);
    }


    return (
        <>
            <h3>동기(Synchronous)와 비동기(Asynchronous) 방식의 이해</h3>
            <p>
                동기식 - 어떤 일을 순차적으로 수행하는 것을 말함.
            </p>
            <p>
                비동기식 - 어떤 일을 비순차적으로 수행하는 것을 말함.
            </p>
            <dl>
                <dt>오전에 기상하여 학원에 오기</dt>
                <dd>1. 알람끄기</dd>
                <dd>2. 샤워</dd>
                <dd>3. 머리 말리기</dd>
                <dd>4. 밥먹기</dd>
                <dd>5. 양치</dd>
                <dd>6. 옷입기</dd>
                <dd>7. 학원이동</dd>
            </dl>

            <p>
                클래스형 콤포넌트는 state, 함수형 콤포넌트는 useState를 사용하여 상태관리를 할 수 있다.
            </p>
            <p>
                왜 일반적으로 사용하는 변수를 두고 state를 사용해서 값을 관리할까요?
            </p>
            <p>
                따라서 값이 변화함에 따라 실시간으로 화면이 랜더링되고 변화된 값이 화면에 바로 반영됩니다.
            </p>
            <p>
                함수들은 보통 객체의 이벤트에 의해 호출이 되기 때문에 state값이 비동기적입니다.
            </p>

            <h4>
                비동기 방식의 state값 확인
            </h4>
            <p>
                +,- 버튼을 누르면 1씩 증가, 감소, 입력상자에 값을 쓰면 바로 숫자로 변경되는 콘텐츠 구현하기
            </p>
            
            <div>
                <button onClick={onDecrease}>-</button>
                <input type="text" value={num} onChange={onDataChange} />
                <button onClick={onIncrease}>+</button>
                <span>{price}</span>
            </div>
            <div>
                {num}개 
                <br />
                총 상품 금액: {price*num}원
            </div>


            <p>
                클릭이벤트로 처리되어서 비동기처리되어 콘솔창에 숫자가 1 적게 표시됨.
            </p>
            <p>
                비동기 특성에 의해 이벤트 루프에 의해 작업이 뒤로 밀리게 되는데 이것을 해결하기 위해 useEffect를 사용한다.
            </p>
        </>
    );
}

export default ProductDetail;