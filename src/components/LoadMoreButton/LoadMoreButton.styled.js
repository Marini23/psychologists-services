import styled from 'styled-components';

export const BtnLoadMore = styled.button`
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
