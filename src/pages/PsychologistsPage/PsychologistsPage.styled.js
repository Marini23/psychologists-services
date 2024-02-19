import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  padding-top: 266px;
  padding-bottom: 64px;
`;
