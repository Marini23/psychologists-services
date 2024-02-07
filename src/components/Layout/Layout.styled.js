import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 96px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundMain};

  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
