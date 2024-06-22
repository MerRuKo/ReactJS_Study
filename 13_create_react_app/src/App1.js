import { useState, useEffect } from "react";

// 이 소스에서 state 값이 변할때마다 (버튼 클릭, 텍스트 입력) 모든 코드들도 함께 실행된다.
// 그냥 단순히 콘솔로그면 큰 문제가 안되겠지만 만약 진짜 api 같은거라도 콜하는 코드가 컴포넌트에 들어있다면?
// 그건 엄청난 문제가 된다. 즉, 우리는 특정 코드들은 컴포넌트의 첫번째 렌더때만 실행되게 만들어야한다. 
// 그것에 대한 해답이 바로 Effect다.

function App1() {
  const [counter, setCounter] = useState(0); // 임포트 했으니까 React. 생략가능
  const [keyword, setKeyword] = useState(""); // 임포트 했으니까 React. 생략가능
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // state 값이 변할때마다 (버튼 클릭, 텍스트 입력) 계속 실행 되는 녀석.
  console.log("i run all the time");

  // 컴포넌트 로드시의 딱 한번만 실행되게 하고싶은 함수를 정의.
  // 그 함수를 useEffect에 넣어주면 처음에만 실행되고 state 변해도 실행 안된다!
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce, []);

  // 위에 것과 다른 문법의 버전. 마찬가지로 똑같이 작동한다.
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  // useEffect의 두번째 인수의 역할 : 두번째 인수의 state가 변할때만 이 함수를 실행해라 라는 조건을 달아줄 수 있다!
  // useEffect의 두번째 인수를 설정 안하면? 위에 함수들처럼 처음에만 한번 실행되고만다.
  // 물론 두번째 인수는 [keyword,counter] 이런식으로 여러개도 설정할 수 있다.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) { // 요런식으로 조건을 달면 조건 만족시에만 실행하게 할 수도 있다.
    console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick} style={{marginBottom: 50}}>Click me</button>
      <hr></hr>
    </div>
  );
}

export default App1;