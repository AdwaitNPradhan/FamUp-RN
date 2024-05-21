import React from 'react';
import {
  DrawerHeaderProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import FinanceScreen from '../screens/Finances/FinanceScreen';
import NoteScreen from '../screens/Notes/NoteScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import CustomHeader from '../components/CustomHeader';

const Drawer = createDrawerNavigator();

const AppNav = () => {
  const header = (props: DrawerHeaderProps) => (
    <CustomHeader headerProps={props} />
  );
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Finances" component={FinanceScreen} />
      <Drawer.Screen name="Notes" component={NoteScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default AppNav;
