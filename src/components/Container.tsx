import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';
import CColors from '../constants/colors';

const Container = (props: ViewProps) => {
  return <View {...props} style={[styles.base, props.style]} />;
};

export default Container;

const styles = StyleSheet.create({
  base: {
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: CColors.transparent,
  },
});
