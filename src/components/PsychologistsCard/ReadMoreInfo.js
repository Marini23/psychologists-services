import { BtnMakeAppointment } from './PsychologistsCard.styled';
import { PsychologistsReviews } from './PsychologistsReviews';

export const ReadMoreInfo = ({ reviews, isOpen }) => {
  return (
    <div>
      <PsychologistsReviews reviews={reviews} />
      <BtnMakeAppointment type="button" onClick={isOpen}>
        Make an appointment
      </BtnMakeAppointment>
    </div>
  );
};
