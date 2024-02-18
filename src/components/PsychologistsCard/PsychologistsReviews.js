import {
  Avatar,
  Container,
  Img,
  Name,
  NameRatingContainer,
  Rating,
  ReviewItem,
  ReviewsList,
} from './PsychologistsReviews.styled';
import StarIcon from './star.svg';

export const PsychologistsReviews = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews.map(review => (
        <ReviewItem key={review.reviewer}>
          <Container>
            <Avatar>{review.reviewer[0]}</Avatar>
            <NameRatingContainer>
              <Name>{review.reviewer}</Name>
              <Rating>
                <Img src={StarIcon} alt="Star Icon" />
                {review.rating}
              </Rating>
            </NameRatingContainer>
          </Container>
          <p>{review.comment}</p>
        </ReviewItem>
      ))}
    </ReviewsList>
  );
};
