import { Header, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <div>
        <NavLinkStyled to="/">
          <span>psychologists.</span>services
        </NavLinkStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/psychologists">psychologists</NavLinkStyled>
      </div>
    </Header>
  );
};
