import React, {useState} from 'react';
import styles from './css/Login.module.css';

function Login() {

    //  state관리하기
    const [inputs, setInputs] = useState({
        userid:'',
        password:''
    });

    // 비구조화 할당 방식을 통해 값을 추출한다.
    const {userid, password} = inputs;

    // 값이 변경되는 함수 - 타겟대상은 2개
    const onDataChange =(e)=>{
        const{value, name} = e.target;
        setInputs({
            ...inputs, // 기존 inputs 객체를 복사한다.
            [name]: value // name키를 가진 값을 value로 설정한다.
        })
    }

    return (
        <>
            <article className={styles.wrap}>
                <h2>로그인</h2>

                <input type="text" placeholder="아이디를 입력해주세요" name="userid" value={userid} onChange={onDataChange} />
                <input type="password" placeholder="비밀번호를 입력해주세요" name="password" value={password} onChange={onDataChange} />
                <div>
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <input type="submit" value="로그인"/>
                <button>회원가입</button>

            </article>
        </>
    );
}

export default Login;