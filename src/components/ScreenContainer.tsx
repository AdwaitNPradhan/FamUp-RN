import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

const ScreenContainer = (props: ViewProps) => {
  const {currentTheme} = useTheme();
  return (
    <View
      {...props}
      style={[
        styles.container,
        {backgroundColor: currentTheme.background},
        props.style,
      ]}
    />
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
