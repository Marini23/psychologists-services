import { RotatingLines } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

export const Loader = () => {
  const theme = useTheme();
  return (
    <RotatingLines
      strokeColor={theme.colors.primary}
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};
