import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TodoListProvider from './context/TodoListProvider';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <TodoListProvider>
    <Layout>
      <App />
    </Layout>
  </TodoListProvider>
);
