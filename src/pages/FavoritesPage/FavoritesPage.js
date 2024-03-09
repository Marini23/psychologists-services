import { FavoritesPsychologists } from 'components/FavoritesPsychologists/FavoritesPsychologists';
import { Button, Container } from './FavoritesPage.styled';
import { FilterPsychologists } from 'components/FilterPsychologists/FilterPsychologists';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFavoritesPsychologists,
  selectFilteredFavorites,
  selectIsLoading,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';

import { changePageFavorites } from '../../redux/favoritesSlice/favoritesSlice';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesPsychologists = useSelector(selectFavoritesPsychologists);

  const paginateFavorites = useSelector(selectFilteredFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     dispatch(clearFavorites());
  //   }
  // }, [dispatch, isLoggedIn]);

  const handleClick = () => {
    dispatch(changePageFavorites());
  };

  return (
    <Container>
      {favoritesPsychologists.length !== 0 ? <FilterPsychologists /> : null}
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <FavoritesPsychologists />
      {paginateFavorites < favoritesPsychologists ? (
        <Button type="button" onClick={handleClick}>
          Load more
        </Button>
      ) : null}
    </Container>
  );
};
