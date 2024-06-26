import { useState } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 배열형으로 변수 선언
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 바닐라JS에서 봤던 submit 새로고침 막아주는 친구
    if (toDo === "") {
      return;
    }
    // array형 state에 엘리먼트를 push하는 법
    setToDos(currentArray => [toDo, ...currentArray]);
    // 1. setToDos 함수는 새로운 상태 값을 직접 전달받거나 함수를 전달받을 수 있습니다. 이 코드에서는 함수를 전달하고 있습니다.
    // 2. 이 함수는 현재 상태를 첫 번째 인수(currentArray)로 받습니다.
    // 3. React는 이 함수를 호출할 때 currentArray에 현재 toDos 배열을 전달합니다.
    // 4. toDo는 버튼을 눌러 onSubmit 될 시점에 input 상자에 입력했던 toDo값 입니다.
    // 5. ...currentArray는 현재의 toDos 배열의 모든 요소를 복사합니다.
    // 6. 따라서 [toDo, ...currentArray]는 새로운 toDo를 배열의 맨 앞에 추가하고,
    // 7. 기존의 toDos 배열의 요소들을 뒤따라 붙인 새로운 배열을 만들어 리턴합니다.
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          // 같은 컴포넌트의 list를 렌더할때는 유니크한 값의 key prop을 넣어줘야 콘솔창에 에러가 안뜸.
          // map함수의 두번째 인수인 index를 이용해서 유니크한 key를 정의해주자.
          <li key={index}>{item}</li>
        ))}
        { /* 바닐라자바스크립트의 함수 map의 기능 */ }
        { /* map의 첫번째 인수로 현재의 item을 가져올 수 있는데, 배열의 모든 요소를 한번씩 돌면서 작동하고 그 결과값을 반환한다. */ }
        { /* ['apple','orange','tomato'].map((item) => item.toUpperCase())    =>    ['APPLE', 'ORANGE', 'TOMATO'] */ }
        { /* ['apple','orange','tomato'].map((item) => item + "hello")    =>    ['applehello', 'orangehello', 'tomatohello'] */ }
        { /* ['apple','orange','tomato'].map((item) => "hello")    =>    ['hello', 'hello', 'hello'] */ }
        { /* ['apple','orange','tomato'].map(() => "hello")    =>    ['hello', 'hello', 'hello'] */ }
      </ul>
    </div>
  );
}

export default App;
