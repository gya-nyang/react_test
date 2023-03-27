import React from 'react';
import MusicData from './music_data.json';

function Music() {

    // let filterData = MusicData.filter(e => e.id <= 20);
    // let filterData = MusicData.filter((e, i) => i < 20);
    let filterData = MusicData.slice(0,20);

    console.log(MusicData[0].url);
    

    const styles = {
        listStyle:"none",
        marginBottom:"20px"
    }



    return (
        <>
            <ul>
                {filterData.map(data=>
                    <li key={data.id} style={styles}>
                        {data.id}
                        <br />
                        제목: {data.title}
                        <br />
                        url: <a href={data.url} title="자세히 보기">자세히 보기</a>
                        <br />
                        <img src={data.thumbnailUrl} alt="썸네일"/>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Music;