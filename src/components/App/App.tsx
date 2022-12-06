import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;