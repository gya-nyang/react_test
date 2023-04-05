import React from 'react';
import ProductDetail from './ProductDetail';
import ProductDetail2 from './ProductDetail2';

function Main() {
    return (
        <>
            <h2>비동기 방식</h2>
            <ProductDetail />
            <hr />
            <h3>동기방식</h3>
            <ProductDetail2 />
        </>
    );
}

export default Main;