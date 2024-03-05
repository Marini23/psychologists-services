import { FavoritesPsychologists } from 'components/FavoritesPsychologists/FavoritesPsychologists';
import { Button, Container } from './FavoritesPage.styled';
import { FilterPsychologists } from 'components/FilterPsychologists/FilterPsychologists';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFavoritesPsychologists,
  selectIsLoading,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';

import { useState } from 'react';

export const FavoritesPage = () => {
  const favoritesPsychologists = useSelector(selectFavoritesPsychologists);
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

  return (
    <Container>
      {favoritesPsychologists.length !== 0 ? <FilterPsychologists /> : null}
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <FavoritesPsychologists visibleFavorites={visibleFavorites} />
      {visibleFavorites < favoritesPsychologists ? (
        <Button type="button" onClick={handleClick}>
          Load more
        </Button>
      ) : null}
    </Container>
  );
};
