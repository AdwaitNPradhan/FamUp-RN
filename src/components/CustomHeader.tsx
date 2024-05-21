import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {ReactNode} from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';

const CustomHeader = ({
  headerProps,
  left,
  right,
  onLeftPress,
  onRightPress,
}: {
  headerProps: DrawerHeaderProps;
  left?: ReactNode;
  right?: ReactNode;
  onLeftPress?: (val?: any) => void;
  onRightPress?: (val?: any) => void;
}) => {
  const navigation = headerProps.navigation;
  return (
    <View>
      <Text>CustomHeader</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
