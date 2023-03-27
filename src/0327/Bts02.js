import React from 'react';
import Child02 from './Child02';

function Bts02() {

    const bts = [
        {
            id:1, 
            name:'김남준',
            age:30,
            email:'abc1231@naver.com',
            imgPath:'img01.jpg',
        },
        {
            id:2, 
            name:'김석진',
            age:32,
            email:'abc1232@naver.com',
            imgPath:'img02.jpg',
        },
        {
            id:3, 
            name:'민윤기',
            age:31,
            email:'abc1233@naver.com',
            imgPath:'img03.jpg',
        },
        {
            id:4, 
            name:'박지민',
            age:29,
            email:'abc1234@naver.com',
            imgPath:'img04.jpg',
        },
        {
            id:5, 
            name:'김태형',
            age:29,
            email:'abc1235@naver.com',
            imgPath:'img05.jpg',
        },
        {
            id:6, 
            name:'전정국',
            age:27,
            email:'abc1236@naver.com',
            imgPath:'img06.jpg',
        },
        {
            id:7, 
            name:'정호석',
            age:30,
            email:'abc1237@naver.com',
            imgPath:'img07.jpg',
        }
    ]

    const styles = {
        display:'flex'
    }
        

    return (
        <>

            <h3>BTS 멤버 프로필</h3>
            <ul style={styles}>
                {bts.map(bt=><Child02 key={bt.id} name={bt.name} id={bt.id} age={bt.age} email={bt.email} imgPath={bt.imgPath}/>)}
            </ul>
        </>
    );
}

export default Bts02;