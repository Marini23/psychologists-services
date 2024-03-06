import { FavoritesPsychologists } from 'components/FavoritesPsychologists/FavoritesPsychologists';
import { Button, Container } from './FavoritesPage.styled';
import { FilterPsychologists } from 'components/FilterPsychologists/FilterPsychologists';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFavoritesPsychologists,
  selectFilter,
  selectIsLoading,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';

import { useState } from 'react';

export const FavoritesPage = () => {
  const favoritesPsychologists = useSelector(selectFavoritesPsychologists);
  const filter = useSelector(selectFilter);
  const [visibleFavorites, setVisibleFavorites] = useState(
    favoritesPsychologists.slice(0, 3)
  );
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleClick = () => {
    setVisibleFavorites(prevData => {
      const nextIndex = prevData.length + 3;
      return favoritesPsychologists.slice(0, nextIndex);
    });
  };
  const sortedVisibleFavorites = () => {
    const key = filter.replace('_ascending', '').replace('_descending', '');
    if (filter.includes('_ascending')) {
      return [...visibleFavorites].sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key]; // Numeric comparison if both are numbers
        } else {
          return a[key].localeCompare(b[key]);
        }
      });
    } else if (filter.includes('_descending')) {
      return [...visibleFavorites].sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return b[key] - a[key];
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
    } else {
      return visibleFavorites;
    }
  };

  return (
    <Container>
      {favoritesPsychologists.length !== 0 ? <FilterPsychologists /> : null}
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <FavoritesPsychologists visibleFavorites={sortedVisibleFavorites()} />
      {visibleFavorites < favoritesPsychologists ? (
        <Button type="button" onClick={handleClick}>
          Load more
        </Button>
      ) : null}
    </Container>
  );
};
