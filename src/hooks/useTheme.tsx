import {useDispatch, useSelector} from 'react-redux';
import {selectTheme, setTheme} from '../redux/slices/appSettingsSlice';
import ThemeConfigs, {TThemes} from '../constants/themes';
import LocalStorage from '../utils/LocalStorage';
import {useColorScheme} from 'react-native';

const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const isDarkMode = useColorScheme() === 'dark';

  const MountTheme = async () => {
    const theme = (await LocalStorage.getItem('theme')) as TThemes;
    if (theme) {
      dispatch(setTheme({theme}));
    } else {
      dispatch(setTheme({theme: isDarkMode ? 'dark' : 'light'}));
    }
  };

  const GetAllThemes = (): string[] => {
    return Object.keys(ThemeConfigs);
  };
  const SwitchTheme = (theme: TThemes) => {
    dispatch(setTheme({theme}));
  };

  return {
    GetAllThemes,
    currentThemeName: currentTheme,
    currentTheme: ThemeConfigs[currentTheme],
    SwitchTheme,
    MountTheme,
  };
};

export default useTheme;
