import React, { Component } from 'react';

class Event2 extends Component {

    // 함수 작성하기
    shoot=()=>{
        alert('슈우우우웅');
    }

    render() {
        return (
            <>
                <h2>2. 클래스형 콤포넌트에서 이벤트 사용하기</h2>

                <p>
                    React의 메서드의 경우 this키워드는 메서드를 소유한 구성요소를 나타내야 합니다.
                </p>
                <p>
                    함수 앞에 const 사용시 에러가 난다...
                </p>
                <p>
                    this키워드는 콤포넌트 오브젝트를 함고합니다.
                </p>

                <button onClick={this.shoot}>눌러보세요</button>
            </>
        );
    }
}

export default Event2;