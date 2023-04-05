import React from 'react';
import useFetch from './UseFetch'

function Custom2() {

    const [datas] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <>
            {
                datas && datas.map(data =>{
                    return <p key={data.id}>{data.title}</p>
                })
            }
        </>
    );
}

export default Custom2;