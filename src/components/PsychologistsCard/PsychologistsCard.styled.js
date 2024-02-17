import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1184px;
  height: 358px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 auto;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
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
  width: 83.78%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceRating = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Star = styled.img`
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
