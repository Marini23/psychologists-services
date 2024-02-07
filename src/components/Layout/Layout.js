import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './Layout.styled';

export const Layuot = () => {
  return (
    <Header>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Header>
  );
};
