import StarIcon from './star.svg';
import { FaHeart } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa6';
import { ThemeContext } from 'styled-components';
import {
  AboutText,
  BtnReadMore,
  Container,
  ContainerImg,
  ContainerInfo,
  ContainerTitle,
  FeaturesSpan,
  FeaturesText,
  HeartIcon,
  Img,
  Item,
  Name,
  NameText,
  NotAuthMessage,
  PriceRating,
  PriceSpan,
  PriceText,
  Rating,
  RatingText,
  Star,
} from './PsychologistsCard.styled';
import { ReadMoreInfo } from './ReadMoreInfo';
import { useContext, useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { FormMakeAppointment } from 'components/FormMakeAppointment/FormMakeAppointment';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectPsychologistsItems,
} from '../../redux/selectors';
import {
  addFavorites,
  deleteFavorites,
} from '../../redux/favoritesSlice/favoritesSlice';
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
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const psychologists = useSelector(selectPsychologistsItems);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isReadMore, setIsReadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const [modalIsOpenNotAuth, setModalIsOpenNotAuth] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    const selectPsychologist = psychologists.find(
      psychologist => psychologist.name === name
    );
    setSelectedPsychologist(selectPsychologist);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModalNotAuth = () => {
    setModalIsOpenNotAuth(true);
  };

  const closeModalNotAuth = () => {
    setModalIsOpenNotAuth(false);
  };

  const isOpenReadMore = () => {
    setIsReadMore(true);
  };

  const isFavorite = useSelector(state =>
    state.favorites.favoritesPsychologists.some(
      favorite => favorite.name === name
    )
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(psychologist));
    } else {
      if (isLoggedIn) {
        dispatch(addFavorites(psychologist));
      } else {
        openModalNotAuth();
      }
    }
  };

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
            <HeartIcon>
              {isFavorite ? (
                <FaHeart
                  style={{
                    corsor: 'pointer',
                    color: theme.colors.active,
                  }}
                  size="26px"
                  onClick={toggleFavorite}
                />
              ) : (
                <FaRegHeart
                  style={{
                    corsor: 'pointer',
                    color: theme.colors.black,
                  }}
                  size="26px"
                  onClick={toggleFavorite}
                />
              )}
            </HeartIcon>
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
            <FeaturesSpan>{initial_consultation}</FeaturesSpan>
          </FeaturesText>
        </Container>
        <AboutText>{about}</AboutText>
        {!isReadMore ? (
          <BtnReadMore type="button" onClick={isOpenReadMore}>
            Read more
          </BtnReadMore>
        ) : null}
        {isReadMore ? (
          <ReadMoreInfo reviews={reviews} isOpen={openModal} />
        ) : null}
      </ContainerInfo>

      <ModalWindow isClose={closeModal} isOpen={modalIsOpen}>
        <FormMakeAppointment
          isClose={closeModal}
          selectedPsychologist={selectedPsychologist}
        />
      </ModalWindow>
      <ModalWindow isClose={closeModalNotAuth} isOpen={modalIsOpenNotAuth}>
        <NotAuthMessage>
          This functionality is only available to authorized users.
        </NotAuthMessage>
      </ModalWindow>
    </Item>
  );
};
