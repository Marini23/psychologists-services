import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Form,
  InputBlue,
  InputGreen,
  InputOrange,
  RoundBlue,
  RoundGreen,
  RoundOrange,
} from './ThemeSwitcher.styled';

import { green, blue, orange } from '../../styles/themeSwitcher';
import { selectTheme } from '../../redux/selectors';
import { setSelectedTheme } from '../../redux/themeSlice/themeSlice';
import { useEffect } from 'react';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);

  useEffect(() => {
    if (!selectedTheme) {
      dispatch(setSelectedTheme(green));
    }
  }, [dispatch, selectedTheme]);

  const HandleThemeChange = theme => {
    dispatch(setSelectedTheme(theme));
  };

  return (
    <Form>
      <Container>
        <InputGreen
          type="radio"
          id="green-theme"
          name="theme"
          value="green-theme"
          onChange={() => HandleThemeChange(green)}
          checked={selectedTheme.name === green.name}
        />
        <RoundGreen className="switcher"></RoundGreen>
      </Container>
      <Container>
        <InputBlue
          type="radio"
          id="blue-theme"
          name="theme"
          value="blue-theme"
          onChange={() => HandleThemeChange(blue)}
          checked={selectedTheme.name === blue.name}
        />
        <RoundBlue className="switcher"></RoundBlue>
      </Container>
      <Container>
        <InputOrange
          type="radio"
          id="orange-theme"
          name="theme"
          value="orange-theme"
          onChange={() => HandleThemeChange(orange)}
          checked={selectedTheme.name === orange.name}
        />
        <RoundOrange className="switcher"></RoundOrange>
      </Container>
    </Form>
  );
};
