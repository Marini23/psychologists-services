import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
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
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  width: 176px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundMain};
  font-weight: 500;
  line-height: 1.2;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;
