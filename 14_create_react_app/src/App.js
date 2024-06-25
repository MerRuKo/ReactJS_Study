import { useState, useEffect } from "react";

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
    // 1. 「currentArray =>」 페이지 로드시 비어있는 currentArray를 불러와서
    // 2. 「toDo, ...currentArray」 submit 시점의 toDo값을 currentArray에 푸쉬한다
    setToDo("");
  };
  
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
