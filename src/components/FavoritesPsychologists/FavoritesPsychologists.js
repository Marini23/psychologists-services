import { useSelector } from 'react-redux';
import { EmptyFavoritesMessage, List } from './FavoritesPsychologists.styled';
import { selectFavoritesPsychologists } from '../../redux/selectors';
import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';

export const FavoritesPsychologists = () => {
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
