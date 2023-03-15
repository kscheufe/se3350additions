import { Route, Routes, Navigate } from "react-router-dom";
import OutlineView from "./pages/OutlineView";
import DisplayEditor from "./components/Editor/DisplayEditor";
import Home from "./pages/Home";
import AdminView from "./pages/AdminView";
import Login from "./pages/Login";
import Outline from "./pages/Outline";

function App() {

    const user = localStorage.getItem('user')
    let courses ;
    if(user !== null){
      const userObj = JSON.parse(user);
      courses = userObj[0].assigned_courses
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = '*' exact element= {<Navigate replace to = '/'/>}/>
      {user && <Route path="outline-view" element={<OutlineView courses={courses}/>}>
          <Route path=":id" element={<DisplayEditor courses={courses} />} />
        </Route>}
      {user && <Route path="/admin-view" element={<AdminView />} />}
      {user && <Route path="/outline-editor" exact element={<Outline />} />}
      {!user && <Route path="/login" exact element={<Login />} />}
    </Routes>
  );
}

export default App;
