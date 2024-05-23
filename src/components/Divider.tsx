import {DimensionValue, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

const Divider = ({
  height,
  bgColor,
  width,
  style,
}: {
  height?: DimensionValue;
  width?: DimensionValue;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const {currentTheme} = useTheme();
  const styles: StyleProp<ViewStyle> = {
    height: height ?? 1,
    width: width ?? '100%',
    backgroundColor: bgColor ?? `${currentTheme.accent}`,
    borderWidth: 1,
    borderColor: bgColor ?? `${currentTheme.accent}`,
    borderRadius: 100,
  };
  return <View style={[styles, style]} />;
};

export default Divider;
