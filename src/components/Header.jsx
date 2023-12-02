import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    // 로그인 상태를 관리하는 useState 훅
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (!loggedIn) {
            navigate('/login');
        } else {
            setLoggedIn(false); // 로그아웃 처리
        }
    };

    // 로그인 상태를 토글하는 함수

    return (
        <div className='header-container'>
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
                        <img
                            style={{ width: "154px", height: "20px" }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="로고"/>
                    </Link>
                    <ul>
                        <li><Link className="header-nav-item" to="/movie">영화</Link></li>
                        <li><Link className="header-nav-item" to="/tv">TV 프로그램</Link></li>
                        <li><Link className="header-nav-item" to="/person">인물</Link></li>
                        <li><Link className="header-nav-item" to="/">More</Link></li>
                    </ul>
                </div>
                <div className="header-left-wrap" >
                    {/* 로그인 상태에 따라 다른 버튼과 메시지를 표시 */}
                    {loggedIn ? (
                        <div>
                            <button onClick={handleLoginClick}>로그아웃</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleLoginClick}>로그인</button>
                        </div>
                    )}
                <p style={{ marginLeft: '10px', color: 'white' }}>
                            {loggedIn ? '환영합니다!' : '로그인 해주세요'}
                        </p>

                        (

                </div>
            </div>
        </div>
    );
}