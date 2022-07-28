import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/list' element={<List />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
