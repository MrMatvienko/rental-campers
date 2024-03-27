import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Suspense, lazy } from 'react';
import Loader from 'componets/Loader/Loader';

const LazyHome = lazy(() => import('./pages/Home/Home'));
const LazyRental = lazy(() => import('./pages/Rental/Rental'));
const LazyFavorites = lazy(() => import('./pages/Favorites/Favorites'));

const App = () => {
  return (
    <BrowserRouter basename="/rental-campers">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHome />} />
            <Route path="/rental" element={<LazyRental />} />
            <Route path="/favorites" element={<LazyFavorites />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
