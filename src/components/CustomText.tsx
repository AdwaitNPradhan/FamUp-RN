import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

enum EFontWeight {
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
  Bold = '700',
}

enum EFontSize {
  Small = 12,
  Medium = 16,
  Large = 20,
}

const CustomText = (props: TextProps) => {
  const {currentTheme} = useTheme();

  const BaseStyles: StyleProp<TextStyle> = [
    {
      color: currentTheme.textColor,
      fontSize: EFontSize.Medium,
      fontWeight: EFontWeight.Regular,
    },
    props?.style,
  ];

  return <Text {...props} style={[BaseStyles]} />;
};

export default CustomText;
