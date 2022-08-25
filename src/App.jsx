import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "./components/Top";
import { Create } from "./components/Create";
import { Index } from "./components/Index";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
          <Route path={`/create/`} element={<Create />} />
          <Route path={`/index/`} element={<Index />} />
          <Route path={`/Login/`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
