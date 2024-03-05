import { EmptyFavoritesMessage, List } from './FavoritesPsychologists.styled';
import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';

export const FavoritesPsychologists = ({ visibleFavorites }) => {
  return (
    <>
      {visibleFavorites.length === 0 ? (
        <EmptyFavoritesMessage>
          Your favorites list is empty.
        </EmptyFavoritesMessage>
      ) : (
        <List>
          {visibleFavorites.map(psychologist => (
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
