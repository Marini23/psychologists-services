import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  padding-left: 8.88%;
  padding-right: 8.88%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: 170px;
  padding-bottom: 64px;
  background-color: ${({ theme }) => theme.colors.background};
`;
