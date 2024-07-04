import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// BrowserRouter가 아닌 HashRouter로 하면 index URL 앞에 #이 붙는다.
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* 사용자가 「/hello」 URL에 있다면 h1 Hello를 렌더한다 */}
        <Route path="/hello" element={<h1>Hello</h1>} />

        {/* 사용자가 「/movie」 URL에 있다면 Detail 컴포넌트를 렌더한다 */}
        {/* 리액트 라우터에서 :id는 URL 파라미터를 의미합니다. 이는 동적 경로 세그먼트를 정의하는 데 사용됩니다. */}
        <Route path="/movie/:id" element={<Detail />} />

        {/* 사용자가 「/」 URL에 있다면 Home 컴포넌트를 렌더한다 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
