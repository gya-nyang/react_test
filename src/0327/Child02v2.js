import React from 'react';
import JSON from './bts.json';

function Child02v2() {

    const styles = {
        listStyle:'none',
        marginBottom:'30px',
        lineHeight:'1.6'
    }

    const styles2 = {
        margin:0
    }

    return (
        <>
            {JSON.bts.map(member=>(
                <li style={styles} key={member.id}>
                    <p style={styles2}>멤버 {member.id}</p>
                    <p style={styles2}><img src={`${process.env.PUBLIC_URL}/0327/${member.imgPath}`} alt="이미지"/></p>
                    <p style={styles2}>이름: {member.name}</p>
                    <p style={styles2}>나이: {member.age}</p>
                    <p style={styles2}>이메일: {member.email}</p>
                </li>
            ))}
        </>
    );
}

export default Child02v2;