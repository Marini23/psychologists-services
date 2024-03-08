import { useSelector } from 'react-redux';
import { EmptyFavoritesMessage, List } from './FavoritesPsychologists.styled';
import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';
import { selectFavoritesPsychologists } from '../../redux/selectors';

export const FavoritesPsychologists = ({ visibleFavorites }) => {
  const favoritesPsychologists = useSelector(selectFavoritesPsychologists);
  return (
    <>
      {favoritesPsychologists.length === 0 ? (
        <EmptyFavoritesMessage>
          Your favorites list is empty.
        </EmptyFavoritesMessage>
      ) : (
        <List>
          {favoritesPsychologists.map(psychologist => (
            <PsychologistsCard
              psychologist={psychologist}
              key={psychologist.name}
            />
          ))}
        </List>
      )}
    </>
  );
};
