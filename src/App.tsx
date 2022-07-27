import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
