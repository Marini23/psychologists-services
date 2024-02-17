import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { selectIsRefreshing } from '../redux/selectors';
import { Loader } from './Loader';
import { PsychologistsPage } from 'pages/PsychologistsPage/PsychologistsPage';

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
          <Route index element={<div></div>} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="*" element={<div></div>} />
        </Route>
      </Routes>
    </div>
  );
};
