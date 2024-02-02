import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Loaout</div>}>
          <Route index element={<div>Homepage</div>} />
          <Route path="psychologists" element={<div>psychologists</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
      Psychologists-services
    </div>
  );
};
