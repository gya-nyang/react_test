import React from 'react';
import dummy from './food.json';
import styles from './css/style.module.css';

function ProductChild() {
    return (
        <>
            <h2 className={styles.title}>이 상품 어때요?</h2>

            <ul className={styles.product_wrap}>
                {dummy.foods.map(product=>
                    (<li key={product.filename} className={styles.product_item}>
                        <p className={styles.product_img}>
                            <img src={`${process.env.PUBLIC_URL}/0324/images/${product.filename}`} alt="상품이미지"/>
                            <i class="bi bi-cart"></i>
                        </p>
                        <p className={styles.name}>{product.name}</p>
                        <p className={styles.price}>{product.price}원</p>
                        <p className={styles.review}><i class="bi bi-chat-square-dots"></i> 후기 {product.review}</p>
                    </li>)
                )}
            </ul>
        </>
    );
}

export default ProductChild;