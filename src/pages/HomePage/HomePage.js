import { useEffect, useState } from 'react';
import { HomePageFrom1120px } from './HomePageFrom1120px';
import { HomePageTo1120px } from './HomePageTo1120px';

export const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth > 1120 ? <HomePageFrom1120px /> : <HomePageTo1120px />;
};
