import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0.5rem;
`;
export const BtnRegistration = styled.button`
  cursor: pointer;
  white-space: nowrap;
  height: 48px;
  padding: 0.875rem 2.5rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.backgroundMain};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

export const BtnLogIn = styled.button`
  cursor: pointer;
  white-space: nowrap;
  height: 48px;
  padding: 0.875rem 2.4375rem;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderAuth};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.primary}`};
  }
  &:active {
    background-color: ${props => `${props.theme.colors.primary}`};
  }
`;
