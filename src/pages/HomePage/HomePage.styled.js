import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  padding-left: 8.88%;
  padding-right: 8.88%;
  /* height: 100vh; */
  display: flex;
  margin: 0 auto;
  padding-top: 174px;
  padding-bottom: 64px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1119px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50.25%;
  max-width: 595px;
  @media screen and (max-width: 1119px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: clamp(54px, (54px + 80 * (100vw - 1120px) / 320), 80px);
  font-weight: 600;
  line-height: 1.025;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
  @media screen and (max-width: 1119px) {
    font-size: clamp(32px, (32px + 54 * (100vw - 320px) / 320), 32px);
  }
`;

export const SpanTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  width: 85.74%;
  font-size: clamp(16px, (16px + 18 * (100vw - 1120px) / 320), 18px);
  font-weight: 500;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1.125rem;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 60px;
  margin-top: 40px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.backgroundMain};
  &:hover {
    color: ${({ theme }) => theme.colors.backgroundMain};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.backgroundMain};
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  width: 39.19%;
  @media screen and (max-width: 1120px) {
    width: 50.43%;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 73.53%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  /* padding-left: 6.896%; */
  /* padding-right: 6.896%; */
  position: absolute;
  top: 63.307%;
  left: -21.767%;
  /* top: 333px;
  left: -101px; */
  display: flex;
  width: 67.02%;
  height: 22.43%;
  /* width: 311px;
  height: 118px; */
  border-radius: 13px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  @media screen and (max-width: 480px) {
    left: -08.767%;
    width: 87.02%;
    height: 24.43%;
  }
`;

export const BoxContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 6.896%;
  gap: 1rem;
`;

export const CheckIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.65%;
  height: 45.77%;
  /* width: 54px;
  height: 54px; */
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;
export const CheckArrow = styled.img`
  width: 55.5555%;
  height: 55.5555%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextInfo = styled.p`
  font-size: clamp(0.5rem, calc(1vw + 0.7rem), 0.875rem);
  /* font-size: 0.875rem; */
  font-weight: 400;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.textOpacity};
`;

export const NumberInfo = styled.p`
  font-size: clamp(1rem, calc(1vw + 0.7rem), 1.5rem);
  font-weight: 700;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.backgroundMain};
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  /* height: 526px; */
  /* width: 464px;
  height: 526px; */
`;

export const PeopleIcon = styled.img`
  position: absolute;
  /* left: 449px;
  top: 38px; */
  left: 96.7672%;
  top: 7.23%;
  @media screen and (max-width: 480px) {
    left: 87.7672%;
  }
`;

export const QuestionIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  /* top: 195.35px;
  left: -39px; */
  top: 37.13%;
  left: -8.41%;
  border-radius: 10px;
  transform: rotate(-15deg);
  background-color: ${({ theme }) => theme.colors.questionIcon};
`;

export const QuestionIcon = styled.img`
  transform: rotate(15deg);
`;
