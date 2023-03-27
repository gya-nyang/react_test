import React from 'react';

function Child01({num, name}) {
return (
        <>
            <li>멤버 {num +1} 이름: {name}</li>
        </>
    );
}

export default Child01;