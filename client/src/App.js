import './App.css';
import { Route, Routes} from 'react-router-dom'
import OutlineView from './pages/OutlineView';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/outline-view' exact element = {<OutlineView/>}/>
    </Routes>
    
  );
}

export default App;
