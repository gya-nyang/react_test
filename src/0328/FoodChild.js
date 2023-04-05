import React from 'react';

function FoodChild({foods}) {
    return (
        <>
            {
                foods.map(food=>
                    <FoodList food={food} key={food.id}/>
                )
            }
        </>
    );
}

function FoodList({food}) {
    return (
        <>
            <p>음식명: {food.name}</p>
            <p>가격: {food.price}</p>
            <p>종류: {food.kind}</p>
        </>
    );
}

export default FoodChild;