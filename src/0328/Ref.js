import React, {useState, useRef} from 'react';
import './ref.css'

function Ref(props) {

    const [inputs, setInputs] = useState({
        password:'', // 입력상자에 입력될 값 - 초기값 비워둠
        clicked:false, // 클릭상태값 처음상태
        validated:false, // 유효성 검사
    });


    //  useRef 생성하기
    const passwordInput = useRef();



    // 비구조화 할당
    const {password, clicked, validated} = inputs;

    const onButtonClick =(e)=>{
        e.preventDefault(); // 기본 이벤트 제거
        setInputs({
            clicked:true, 
            validated:password === '1234' // 유효한 값인지 비밀번호 임력값과 비교
        });

        // 사용자가 입력한 패스워드가 일치하지 않으면
        if(password !== '1234'){
            // 패스워드 박스에 다시 초점이 생기게 한다.
            passwordInput.current.focus();
        }
    }

    const onPassChange =(e)=>{
        setInputs({
            password:e.target.value //입력되는 값만 타겟으로 처리한다.
            // 다른 값을 입력하면 true/false로 변경
        })
    }

    return (
        <>
            <h3>input태그에 비밀번호를 입력했을 때 비밀번호가 맞으면 초록색, 그렇지 않으면 주황색이 나오게 하기</h3>

            <form>
                <label for="pass">패스워드: </label>
                <input type="password" id="pass" value={password} onChange={onPassChange} className={clicked && (validated ? 'success' : 'failure')} ref={passwordInput} />
                <button type="submit" onClick={onButtonClick}>검증하기</button>
            </form>
            <hr />
            <p>
                입력하신 현재 값:{password}
            </p>
        </>
    );
}

export default Ref;