import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="project/:slug" element={<Project />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
