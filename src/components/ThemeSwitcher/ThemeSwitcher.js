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

import { green, blue, orange } from 'themeSwitcher';
import { selectTheme } from '../../redux/selectors';
import { setSelectedTheme } from '../../redux/themeSlice/themeSlice';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);
  const HandleThemeChange = theme => {
    dispatch(setSelectedTheme(theme));
  };

  return (
    <div>
      <Form>
        <Container>
          <InputGreen
            type="radio"
            id="green-theme"
            name="theme"
            value="green-theme"
            onChange={() => HandleThemeChange(green)}
            checked={selectedTheme === green}
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
          />
          <RoundOrange className="switcher"></RoundOrange>
        </Container>
      </Form>
    </div>
  );
};
