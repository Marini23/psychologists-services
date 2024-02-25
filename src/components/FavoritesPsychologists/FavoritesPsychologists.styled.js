import styled from 'styled-components';

export const EmptyFavoritesMessage = styled.p`
  display: flex;
  font-size: 3rem;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 64px;
  background-color: ${({ theme }) => theme.colors.background};
`;
