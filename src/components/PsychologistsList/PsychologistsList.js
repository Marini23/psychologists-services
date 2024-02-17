import { PsychologistsCard } from 'components/PsychologistsCard/PsychologistsCard';
import psychologists from '../../psychologists.json';
import { List } from './PsychologistsList.styled';

export const PsychologistsList = () => {
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
