import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstPage } from '../../redux/psychologistsOperations';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';
import { Container } from './PsychologistsPage.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { Loader } from 'components/Loader';

export const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    // dispatch(fetchAll());
    dispatch(fetchFirstPage());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <PsychologistsList />
      <LoadMoreButton />
    </Container>
  );
};
