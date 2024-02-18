import { PsychologistsReviews } from './PsychologistsReviews';

export const ReadMoreInfo = ({ reviews }) => {
  return (
    <div>
      <PsychologistsReviews reviews={reviews} />
      <button type="button">Make an appointment</button>
    </div>
  );
};
