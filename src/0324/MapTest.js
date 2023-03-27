import React from 'react';

function MapTest() {

    const numbers = [1,3,5];
    const listItems = numbers.map((number, idx)=>{
        console.log(number);
    });
    
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    // const sDays = days.map(day=>`★ ${day}`)
    // console.log(sDays);

    const smile = day => `smile ${day}`;
    const sDays = days.map(smile);
    console.log(sDays);
    

    const numbers2 = [4, 9, 16, 25, 36];
    // const result = numbers2.map(Math.sqrt);
    // const result = numbers2.map(number2 => number2*2);
    const result = numbers2.map(function(num){
        return num*2;
    });
    console.log(result);


    // 객체 생성하기
    let students = [
        {id:1, name:'이순신'},
        {id:2, name:'강감찬'},
        {id:3, name:'홍길동'}
    ]

    const names = students.map(student=>student.name);
    console.log(names);

    return (
        <>
            <h3>Map함수 사용하기</h3>
            <p>
                map함수는 기존의 배열 실행한 결과를 가지고 새로운 배열을 만들고자 할 때 사용한다.
            </p>
            <p>
                array.map(현재 배열값, 배열내 현재값 인덱스, 현재 배열), 함수 내에서 this로 사용될 값
            </p>
        </>
    );
}

export default MapTest;