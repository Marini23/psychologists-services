import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';
import { List } from './PsychologistsList.styled';
import { useSelector } from 'react-redux';
import { selectpsychologistsItems } from '../../redux/selectors';

export const PsychologistsList = () => {
  const psychologists = useSelector(selectpsychologistsItems);
  return (
    <List>
      {psychologists.slice(0, 3).map(psychologist => (
        <PsychologistsCard
          psychologist={psychologist}
          key={psychologist.name}
        />
      ))}
    </List>
  );
};
