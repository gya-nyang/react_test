import React from 'react';
import useFetch from './UseFetch';

function Custom3(props) {

    const [datas] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <h3>사용자 HOOKS - useFetch로 학생데이터 불러오기</h3>
            <ul>
                {
                    datas && datas.map(data =>{
                        return (
                            <li key={data.id}>
                                <p>이름: {data.name}</p>
                                <p>이메일: {data.email}</p>
                                <p>주소(도시): {data.address.city}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Custom3;