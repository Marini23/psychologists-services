import { useEffect } from 'react';
import { BtnLoadMore } from './LoadMoreButton.styled';
import { loadMorePages } from '../../redux/psychologistsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/psychologistsSlice';
import { selectCurrentPage, selectTotalPages } from '../../redux/selectors';

export const LoadMoreButton = ({ onClick }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const handleLoadMore = () => {
    dispatch(changePage());
  };

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(loadMorePages(currentPage));
    }
  }, [dispatch, currentPage]);

  return (
    <BtnLoadMore type="button" onClick={handleLoadMore}>
      Load more
    </BtnLoadMore>
  );
};
