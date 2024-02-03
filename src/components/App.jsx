import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';

export const App = () => {
  return (
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
