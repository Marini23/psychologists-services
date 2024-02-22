import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFirstPage,
  fetchTotalHits,
} from '../../redux/psychologistsOperations';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';
import { Container } from './PsychologistsPage.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectTotalPages,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';

export const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isLoadMore = currentPage < totalPages;

  useEffect(() => {
    dispatch(fetchFirstPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTotalHits());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      <PsychologistsList />
      {isLoadMore ? <LoadMoreButton /> : null}
    </Container>
  );
};
