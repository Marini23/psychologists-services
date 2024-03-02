import {
  Box,
  BoxContainerContent,
  Button,
  CheckArrow,
  CheckIcon,
  Container,
  ContentContainer,
  ImagesContainer,
  Img,
  Link,
  NumberInfo,
  PeopleIcon,
  QuestionIcon,
  QuestionIconContainer,
  SpanTitle,
  Text,
  TextContainer,
  TextInfo,
  Title,
  Wrapper,
} from './HomePage.styled';
import arrow from './arrow_start.svg';
import img from './image.svg';
import checkIcon from './check_icon.svg';
import peopleIcon from './people_icon.svg';
import questionIcon from './question_icon.svg';

export const HomePageTo1120px = () => {
  return (
    <Container>
      <Wrapper>
        <ContentContainer>
          <Title>
            The road to the <SpanTitle>depths</SpanTitle> of the human soul
          </Title>
          <ImagesContainer>
            <Img src={img} alt="psychologist" />
            <Box>
              <BoxContainerContent>
                <CheckIcon>
                  <CheckArrow src={checkIcon} alt="Check icon" />
                </CheckIcon>
                <TextContainer>
                  <TextInfo>Experienced psychologists</TextInfo>
                  <NumberInfo>15,000</NumberInfo>
                </TextContainer>
              </BoxContainerContent>
            </Box>
            <PeopleIcon src={peopleIcon} alt="People icon" />
            <QuestionIconContainer>
              <QuestionIcon src={questionIcon} alt="Question icon" />
            </QuestionIconContainer>
          </ImagesContainer>
          <Text>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </Text>
          <Button>
            <Link href="psychologists-services/psychologists">Get started</Link>
            <img src={arrow} alt="arrow" />
          </Button>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};
