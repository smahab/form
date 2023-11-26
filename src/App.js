import logo from './logo.svg';
import './App.css';
import Auth from './components/auth/Auth';
import Register from './components/auth/Register';

import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './components/layout/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Auth />} />
        <Route path='/register' element={<Register />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;
