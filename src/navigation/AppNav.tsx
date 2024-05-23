import React from 'react';
import {
  DrawerHeaderProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import NoteScreen from '../screens/Notes/NoteScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import CustomHeader from '../components/CustomHeader';
import useTheme from '../hooks/useTheme';
import CustomDrawerContent from './CustomDrawerContent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DevelopmentScreen from '../screens/Development/DevelopmentScreen';
import LegalScreen from '../screens/Help&Support/Help&SupportScreen';
import MediaScreen from '../screens/Medias/MediaScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HelpSupportScreen from '../screens/Help&Support/Help&SupportScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppNav = () => {
  const {currentTheme} = useTheme();
  const header = (props: DrawerHeaderProps) => (
    <CustomHeader headerProps={props} />
  );
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeStack"
      screenOptions={{
        header,
        headerBackgroundContainerStyle: {
          backgroundColor: currentTheme.background,
        },
        drawerType: 'slide',
      }}>
      <Drawer.Screen name="HomeStack" component={AppStackNav} />
    </Drawer.Navigator>
  );
};

const AppStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Finances" component={HelpSupportScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Help&Support" component={LegalScreen} />
      <Stack.Screen name="Notes" component={NoteScreen} />
      <Stack.Screen name="Medias" component={MediaScreen} />
      <Stack.Screen name="Development" component={DevelopmentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNav;
