import { Route, Routes } from "react-router-dom";
import OutlineView from "./pages/OutlineView";
import DisplayEditor from "./components/Navbar/DisplayEditor";
import Home from "./pages/Home";
import AdminView from "./pages/AdminView";
import Login from "./pages/Login";
import Outline from "./pages/Outline";

function App() {

    const user = localStorage.getItem('user')
    let courses;
    if(user !== null){
      const userObj = JSON.parse(user);
      courses = userObj.assigned_courses;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="outline-view" element={<OutlineView courses={courses}/>}>
          <Route path=":id" element={<DisplayEditor courses={courses} />} />
        </Route>
      <Route path="/admin-view" element={<AdminView />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/outline-editor" exact element={<Outline />} />
    </Routes>
  );
}

export default App;
