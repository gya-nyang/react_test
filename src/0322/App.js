import React from 'react';
import Event1 from './Event1';
import Event2 from './Event2';
import Counter from './Counter';

function App() {
    return (
        <>
            <h2>이벤트와 stats</h2>
            <h3>이벤트</h3>

            <Event1 />
            <hr />
            <Event2 />
            <hr />
            <h3>state</h3>
            <Counter />
        </>
    );
}

export default App;