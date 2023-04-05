import {useEffect, useState} from 'react';

function UseFetch(url) {

    const [datas, setDatas] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((datas) => setDatas(datas));
    }, [url]);

    return [datas];
}

export default UseFetch;