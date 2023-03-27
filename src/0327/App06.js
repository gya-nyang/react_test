import React from 'react';
import Bts01 from './Bts01';
import Bts02 from './Bts02';
import Bts02v2 from './Bts02v2';
import Music from './Music';

function App06() {
    return (
        <>
            <h2>배열데이터 랜더링</h2>
            <Bts01 />
            <hr />
            <Bts02 />
            <hr />
            <Bts02v2 />

            <hr />
            <h3>데이터 불러오기 실습예제</h3>
            <Music />
        </>
    );
}

export default App06;