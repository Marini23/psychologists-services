import StarIcon from './star.svg';
import HeartIcon from './heart_normal.svg';
import {
  AboutText,
  BtnReadMore,
  Container,
  ContainerImg,
  ContainerInfo,
  ContainerTitle,
  FeaturesSpan,
  FeaturesText,
  Heart,
  Img,
  Item,
  Name,
  NameText,
  PriceRating,
  PriceSpan,
  PriceText,
  Rating,
  RatingText,
  Star,
} from './PsychologistsCard.styled';
import { ReadMoreInfo } from './ReadMoreInfo';

export const PsychologistsCard = ({ psychologist }) => {
  const {
    name,
    avatar_url,
    price_per_hour,
    rating,
    experience,
    license,
    about,
    reviews,
    specialization,
    initial_consultation,
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
            <NameText>{name}</NameText>
          </Name>
          <PriceRating>
            <Rating>
              <Star src={StarIcon} alt="Star Icon" />
              <RatingText>Rating: {rating}</RatingText>
            </Rating>
            <p>|</p>
            <PriceText>
              Price / 1 hour: <PriceSpan>{price_per_hour}$</PriceSpan>
            </PriceText>
            <Heart src={HeartIcon} alt="Heart Icon" />
          </PriceRating>
        </ContainerTitle>
        <Container>
          <FeaturesText>
            Experience: <FeaturesSpan>{experience}</FeaturesSpan>
          </FeaturesText>
          <FeaturesText>
            Lisence: <FeaturesSpan>{license}</FeaturesSpan>
          </FeaturesText>
        </Container>
        <Container>
          <FeaturesText>
            Specialization: <FeaturesSpan>{specialization}</FeaturesSpan>
          </FeaturesText>
          <FeaturesText>
            Initial_consultation:{' '}
            <FeaturesSpan>{initial_consultation}</FeaturesSpan>
          </FeaturesText>
        </Container>
        <AboutText>{about}</AboutText>
        <BtnReadMore type="button"> Read more</BtnReadMore>
        <ReadMoreInfo reviews={reviews} />
      </ContainerInfo>
    </Item>
  );
};
