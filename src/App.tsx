import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
