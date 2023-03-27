import React from 'react';

function Child2( {deli, name, desc, price} ) {
    return (
        <>
            {/* <h3>안녕하세요. 제 이름은 {props.name}입니다.</h3> */}
            <p>
                객체 비구조화 할당 방식
            </p>
            <p>
                객체 비구조화 할당 방식을 사용하면 props속성 이름을 각가 작성하지 않아도 된다.
            </p>
            <ul>
                <li>
                    <p>{deli}</p>
                    <p>{name}</p>
                    <p>{desc}</p>
                    <p>{price}</p>
                </li>
            </ul>
        </>
    );
}
Child2.defaultProps={
    deli:'샛별배송',
    name:'상품명',
    desc: '상세설명',
    price: '0원'
}

export default Child2;