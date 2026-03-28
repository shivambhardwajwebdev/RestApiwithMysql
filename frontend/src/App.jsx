import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateTeacher from "./pages/CreateTeacher";
import Teachers from "./pages/Teachers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<CreateTeacher />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;