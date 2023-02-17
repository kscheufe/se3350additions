import { Route, Routes } from "react-router-dom";
import OutlineView from "./pages/OutlineView";
import Home from "./pages/Home";
import AdminView from "./pages/AdminView";
import Login from "./pages/Login";
import Outline from "./pages/Outline";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/outline-view" exact element={<OutlineView />} />
      <Route path="/admin-view" exact element={<AdminView />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/outline-editor" exact element={<Outline />} />
    </Routes>
  );
}

export default App;
