import React from 'react';

//  라우터 라이브러리 불러오기
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Map from './Map';
import Main from './Main';
import App from '../App';
import NotFound from './NotFound';

function App01() {
    return (
        <>
            <BrowserRouter> {/* 주소, 콤포넌트 모음 */}
                <Header />

                <Routes>  {/* 변경되는 주소에 따른 콤포넌트...?? 모음 */}
                    <Route path='/' element={<Main />} /> {/* 주소, 콤포넌트 매칭 */}
                    {/* <Route path='/Main' element={<Main />} /> 주소, 콤포넌트 매칭 */}
                    <Route path='/Map' element={<Map />} />
                    <Route path='/App' element={<App />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App01;