import { useState, useEffect } from "react";

// 컴포넌트가 사라질때 실행할 함수를 정할 수 있다. 이를 Cleanup Function이라고 한다.
// 방법은 바로 useEffect에서 쓰여지는 실행 함수의 리턴문을 정의하면 된다.
// 이는 분석 API로 정보를 보낼때 같은 경우에 활용 할 수 있다.

// useEffect의 3가지 용도. 코드의 실행타이밍을 정할 수 있다.
// 1. 컴포넌트 생성시에만 특정 코드를 실행할 수 있게 한다.
// 2. state가 변화할때 특정 코드를 실행할 수 있게 한다.
// 3. 컴포넌트가 파괴될때 특정 코드를 실행할 수 있게 한다.

// 쉬운 버전 코드
function Hello() {

  function hiFn() {
    console.log("Created :)");
    return byeFn; // Cleanup Function
  }
  function byeFn() {
    console.log("Destroyed :(");
  }

  useEffect(hiFn, []); // 컴포넌트가 생성되면 실행되는 함수 hiFn

  return <h1>Hello</h1>;
}

// 어려운 버전 코드
// function Hello() {
//   useEffect(() => {
//     console.log("Created :)");
//     // Cleanup Function : useEffect의 실행함수의 리턴문 정의로 컴포넌트가 사라질때 실행할 함수 정의.
//     return () => console.log("Destroyed :(");
//   }, [])
//   return <h1>Hello</h1>;
// }

function App2() {
  const [showing, setShowing] = useState(false);
  const Onclick = () => setShowing( prev => !prev )
  return (
    <div style={{marginTop: 50}}>
      {showing ? <Hello /> : null }
      <button onClick={Onclick}>{showing ? "Hide" : "Show"}</button>
      { /* show 누르면 Created 출력 / hide 누르면 Destroyed 출력 */ }
    </div>
  );
}

export default App2;