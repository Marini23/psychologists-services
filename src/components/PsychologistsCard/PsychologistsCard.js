import StarIcon from './star.svg';
import HeartIcon from './heart_normal.svg';
import { PsychologistsReviews } from './PsychologistsReviews';
import {
  ContainerImg,
  ContainerInfo,
  ContainerTitle,
  Img,
  Item,
  Name,
  PriceRating,
  Rating,
  RatingText,
  Star,
} from './PsychologistsCard.styled';

export const PsychologistsCard = ({ psychologist }) => {
  const {
    name,
    avatar_url,
    price_per_hour,
    rating,
    experience,
    licence,
    about,
    reviews,
  } = psychologist;

  return (
    <Item>
      <ContainerImg>
        <Img src={avatar_url} alt={name} height={96} width={96} />
      </ContainerImg>
      <ContainerInfo>
        <ContainerTitle>
          <Name>
            <p>Psychologist</p>
            <h3>{name}</h3>
          </Name>
          <PriceRating>
            <Rating>
              <Star src={StarIcon} alt="Star Icon" />
              <RatingText>Rating: {rating}</RatingText>
            </Rating>
            <p>|</p>
            <p>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </p>
            <img src={HeartIcon} alt="Heart Icon" />
          </PriceRating>
        </ContainerTitle>
        <div>
          <p>
            <span>Experience:</span>
            {experience}
          </p>
          <p>
            <span>Lisence:</span>
            {licence}
          </p>
        </div>
        <p>{about}</p>
        <PsychologistsReviews reviews={reviews} />
        <button type="button">Make an appointment</button>
      </ContainerInfo>
    </Item>
  );
};
