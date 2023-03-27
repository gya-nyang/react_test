import React from 'react';
import { Link } from 'react-router-dom';
import './css/Base.css';

function Header() {
    return (
        <>
            <header>
                <h1>
                    <Link to='/'>로고</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>메인페이지</Link>
                        </li>
                        <li>
                            <Link to='/Map'>오시는 길</Link>
                        </li>
                        <li>
                            <Link to='/App'>css 서식적용</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;