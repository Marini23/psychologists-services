import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1184px;
  border-radius: 24px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  color: ${({ theme }) => theme.colors.grey};
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  width: 120px;
  min-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.borderAuth};
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.78%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const NameText = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5em;
`;

export const PriceRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 24px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Star = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;

export const RatingText = styled.p`
  display: flex;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.5;
`;

export const PriceText = styled.p`
  display: flex;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.5;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.price};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FeaturesText = styled.p`
  display: flex;
  gap: 10px;
  padding: 8px 1rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const FeaturesSpan = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.black};
`;

export const AboutText = styled.p`
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 10px;
`;

export const BtnReadMore = styled.button`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  height: 24px;
  width: 82px;
  font-weight: 500;
  line-height: 1.5;
`;

export const BtnMakeAppointment = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 227px;
  height: 48px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundMain};
  font-weight: 500;
  line-height: 1.2;
  margin-top: 24px;
`;
