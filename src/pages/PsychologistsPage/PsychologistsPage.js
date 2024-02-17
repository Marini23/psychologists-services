import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchAll } from '../../redux/psychologistsOperations';
// import { Loader } from 'components/Loader';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';

export const PsychologistsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // console.log(isLoading);
  // const error = useSelector(selectError);
  // console.log(error);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <PsychologistsList />
      {/* {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>} */}
    </div>
  );
};
