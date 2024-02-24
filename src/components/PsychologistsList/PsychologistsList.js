import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';
import { List } from './PsychologistsList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredPsychologists } from '../../redux/selectors';

export const PsychologistsList = () => {
  const psychologists = useSelector(selectFilteredPsychologists);
  return (
    <List>
      {psychologists.map(psychologist => (
        <PsychologistsCard
          psychologist={psychologist}
          key={psychologist.name}
        />
      ))}
    </List>
  );
};
