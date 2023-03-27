import React from 'react';
import Child02v2 from './Child02v2';

function Bts02v2() {

    const styles = {
        display:'flex'
    }
        

    return (
        <>
            <h3>BTS 멤버 프로필</h3>
            <ul style={styles}>
                <Child02v2 />
            </ul>
        </>
    );
}

export default Bts02v2;