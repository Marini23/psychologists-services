import styled from 'styled-components';

export const ReviewsList = styled.ul`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 1.5rem;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const NameRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.black};
`;

export const Name = styled.h4`
  font-weight: 500;
  line-height: 1.2;
`;

export const Rating = styled.p`
  display: flex;
  flex-wrap: nowrap;
`;
export const Img = styled.img`
  display: flex;
  padding-right: 10px;
`;
