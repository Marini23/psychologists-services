import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authOperations';
import { selectIsRefreshing } from '../redux/selectors';
import { Loader } from './Loader';

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
          <Route index element={<div>Homepage</div>} />
          <Route path="psychologists" element={<div>psychologists</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
      Psychologists-services
    </div>
  );
};
