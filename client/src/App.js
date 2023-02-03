import './App.css';
import { Route, Routes} from 'react-router-dom'
import OutlineView from './pages/OutlineView';
import Home from './pages/Home';
import AdminView from './pages/AdminView'

function App() {
  return (
    <Routes>
      <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/outline-view' exact element = {<OutlineView/>}/>
      <Route path = '/admin-view' exact element = {<AdminView/>}/>
    </Routes>
    
  );
}

export default App;
