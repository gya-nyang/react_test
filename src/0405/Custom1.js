import React, {useEffect, useState} from 'react';

function Custom1(props) {
    
    // [변수명, 함수명]
    const [datas, setDatas] = useState(null);

    // 
    const url = 'https://jsonplaceholder.typicode.com/todos';

    //  처음 랜더링 때만 부르기 위함
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((datas) => setDatas(datas));
    },[]);

    return (
        <>
            {
                datas && datas.map(data=>{
                    return <p key={data.id}>{data.title}</p>
                })
            }
        </>
    );
}

export default Custom1;