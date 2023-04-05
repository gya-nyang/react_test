import React, {useRef} from 'react';
import FoodChild from './FoodChild.js';

function Food() {

    const foods = [
        {
            id:'f01',
            name:'자장면',
            price:6000,
            kind:'중식'
        },
        {
            id:'f02',
            name:'김치찌개',
            price:7000,
            kind:'한식'
        },
        {
            id:'f03',
            name:'설렁탕',
            price:10000,
            kind:'한식'
        },
        {
            id:'f04',
            name:'피자',
            price:8000,
            kind:'이탈리안'
        },
        {
            id:'f05',
            name:'돈까스',
            price:6000,
            kind:'일식'
        }
    ]

    const nextId = useRef(6); // 현재 배열데이터 5개 다음번호가 들어갸야 하기 때문에 6이라고 선언

    const onCreate =()=>{
        // 기존에 있는 배열에 새로운 데이터를 추가하기 위한 함수
        nextId.current += 1; // 기존 배열값에 1씩 더한다.
    }

    console.log(nextId);

    return (
        <>
            <FoodChild foods={foods} />
        </>
    );
}

export default Food;