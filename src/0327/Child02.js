import React from 'react';

function Child02({id, name, age, email, imgPath}) {

    const styles = {
        listStyle:'none',
        marginBottom:'30px',
        lineHeight:'1.6'
    }

    return (
        <>
            <li style={styles}>
                멤버 {id}
                <br />
                <img src={`${process.env.PUBLIC_URL}/0327/${imgPath}`} alt="이미지" />
                <br />
                이름: {name}
                <br />
                나이: {age}
                <br />
                이메일: {email}
            </li>
        </>
    );
}

export default Child02;