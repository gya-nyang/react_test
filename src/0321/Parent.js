import React from 'react';
import Child2 from './Child2';

function Parent() {
    return (
        <>
            <h2>Props</h2>
            <p>
                Props는 컴포넌트에게 전달되는 값입니다. 이것을 통해서 같은 컴포넌트여도 결과를 다르게 볼 수 있습니다.
            </p>
            <p>
                Props는 properties(속성)의 줄임말.
            </p>
            <p>
                부모콤포넌트가 자식컴포넌트에게 전달해주는 값을 말합니다.
            </p>
            <p>
                리액트에서 props는 값을 읽기 위해서만 사용을 하고, 값을 변경하려면 오류가 발생된다.
            </p>
            <p>
                작성방법: 자손콤포넌트명 속성명 = '값'
            </p>
            <p>
                자손콤포넌트에서 받을 때는 중괄호 안에 props.속성명
            </p>

            <Child2 deli="샛별배송" name="스무딩 플루이드" desc="설명문구" price="34,850" />
            
            <Child2 deli="샛별배송" name="오징어 숏다리" desc="설명문구" price="9,900" />
            
            <Child2 deli="샛별배송" name="꽃보다 오징어 소프트" desc="설명문구" price="7,900" />
            
            <Child2 deli="샛별배송" name="허니 로스트 피넛" desc="설명문구" price="14,900" />
            
            <Child2 deli="샛별배송" name="솜사탕 미니 케이크" desc="설명문구" price="4,500" />
            
            <Child2 deli="샛별배송" name="로얄파크 장미 5대" desc="설명문구" price="23,900" />

            <Child2 />
        </>
    );
}

export default Parent;