import {useColorScheme} from 'react-native';
import {darkColors, lightColors} from './colors';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};
