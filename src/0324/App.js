import React from 'react';
import MapTest from './MapTest';
import MapTest2 from './MapTest2';
import Product from './Product';

function App() {

    // const names = ['갓대희', '김대희', '한대희']; // 1차원 배열

    const names = [ // 2차원 배열
        {username: '이순신', age: 20}, 
        {username: '홍길동', age: 30}, 
        {username: '강감찬', age: 40}
    ];


    const nameList = names.map((v)=>(<MapTest2 key={v.username} name = {v.username} age = {v.age} />));

    return (
        <>
            <MapTest />
            <hr />
            {nameList}
            <hr />
            <Product />
        </>
    );
}

export default App;