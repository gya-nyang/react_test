import React, {useState, useEffect} from 'react';

function ProductDetail2() {

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

    //  useEffect함수로 동기화작업한다.
    useEffect(()=>{
        console.log(num);
    }, [num]);


    return (
        <>
            <h3>동기(Synchronous)방식</h3>

            
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

        </>
    );
}

export default ProductDetail2;