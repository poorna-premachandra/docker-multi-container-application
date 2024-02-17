import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Fib />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
