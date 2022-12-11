import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
//import AdminHomePage from './pages/AdminHomePage';
//import AdminLoginPage from './pages/AdminLoginPage';
//import RegisterShopPage from './pages/RegisterShopPage';
//import DeleteShopPage from './pages/DeleteShopPage';
import Footer from './UI/Footer';
import React from 'react';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ViewShopPage = React.lazy(() => import('./pages/ViewShopPage'));
const AdminHomePage = React.lazy(() => import('./pages/AdminHomePage'));
const RegisterShopPage = React.lazy(() => import('./pages/RegisterShopPage'));
const DeleteShopPage = React.lazy(() => import('./pages/DeleteShopPage'));
const AdminLoginPage = React.lazy(() => import('./pages/AdminLoginPage'));
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<React.Suspense fallback={<>...</>}><HomePage /></React.Suspense>} />
          <Route path='/admin' element={<React.Suspense fallback={<>...</>}><AdminLoginPage /></React.Suspense>} />
          <Route path='/admin/home' element={<React.Suspense fallback={<>...</>}><AdminHomePage /></React.Suspense>} />
          <Route path='/admin/home/register-shop' element={<React.Suspense fallback={<>...</>}><RegisterShopPage /></React.Suspense>} />
          <Route path='/admin/home/view-shop' element={<React.Suspense fallback={<>...</>}><ViewShopPage /></React.Suspense>} />
          <Route path='/admin/home/delete-shop' element={<React.Suspense fallback={<>...</>}><DeleteShopPage /></React.Suspense>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
