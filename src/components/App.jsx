import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { selectIsRefreshing } from '../redux/selectors';
import { Loader } from './Loader';
import { PsychologistsPage } from 'pages/PsychologistsPage/PsychologistsPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import PrivateRoute from './PrivateRoute';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route
            path="/favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};