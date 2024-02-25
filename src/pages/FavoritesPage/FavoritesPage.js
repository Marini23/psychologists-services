import { FavoritesPsychologists } from 'components/FavoritesPsychologists/FavoritesPsychologists';
import { Container } from './FavoritesPage.styled';
import { FilterPsychologists } from 'components/FilterPsychologists/FilterPsychologists';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFavoritesPsychologists,
  selectIsLoading,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';

export const FavoritesPage = () => {
  const favoritesPsychologists = useSelector(selectFavoritesPsychologists);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      {favoritesPsychologists.length !== 0 ? <FilterPsychologists /> : null}
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <FavoritesPsychologists />
    </Container>
  );
};
