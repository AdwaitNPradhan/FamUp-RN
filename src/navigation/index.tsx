import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../redux/slices/authSlice';
import AppNav from './AppNav';
import AuthNav from './AuthNav';
import useTheme from '../hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {MountTheme, currentTheme, currentThemeName} = useTheme();

  useEffect(() => {
    (async () => {
      await MountTheme();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: currentTheme.background,
        flex: 1,
      }}
      edges={['top', 'left', 'right']}>
      <StatusBar
        backgroundColor={currentTheme.navBarColor}
        barStyle={'light-content'}
      />
      {isLoggedIn ? <AppNav /> : <AuthNav />}
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
