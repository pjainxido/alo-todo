import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TodoListProvider from './context/TodoListProvider';
import UserProvider from './context/UserProvider';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <UserProvider>
      <TodoListProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </TodoListProvider>
    </UserProvider>
  </>
);
