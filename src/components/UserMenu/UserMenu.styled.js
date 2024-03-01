import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin-left: auto;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const Name = styled.p`
  font-weight: 500;
  line-height: 1.25;
`;

export const Button = styled.button`
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
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:active {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => `${props.theme.colors.primary}`};
  border-radius: 10px;
`;
