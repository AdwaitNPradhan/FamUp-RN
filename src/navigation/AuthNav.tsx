import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/Auth/AuthScreen';
const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
