import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  margin-top: 266px;
  background-color: ${({ theme }) => theme.colors.background};
`;
