import { useEffect, useState } from 'react';
import { BtnLoadMore } from './LoadMoreButton.styled';
import { loadMorePages } from '../../redux/psychologistsOperations';
import { useDispatch } from 'react-redux';

export const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    console.log(currentPage);
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
