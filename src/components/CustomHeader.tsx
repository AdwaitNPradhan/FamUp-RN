import {Pressable, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import Container from './Container';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../hooks/useTheme';

const CustomHeader = ({
  headerProps,
  left,
  right,
  centre,
  onLeftPress,
  onRightPress,
}: {
  headerProps: DrawerHeaderProps;
  left?: ReactNode;
  centre?: ReactNode;
  right?: ReactNode;
  onLeftPress?: (val?: any) => void;
  onRightPress?: (val?: any) => void;
}) => {
  const {currentTheme} = useTheme();
  const {navigation} = headerProps;
  const handleLeftPress = () => {
    if (onLeftPress) {
      return onLeftPress();
    }
    navigation.toggleDrawer();
  };
  const handleRightPress = () => {
    if (onRightPress) {
      return onRightPress();
    }
    navigation.navigate('Profile');
  };
  return (
    <Container
      style={[
        styles.base,
        {
          backgroundColor: currentTheme.background,
        },
      ]}>
      <Pressable onPress={handleLeftPress}>
        <View>
          {left ?? (
            <Icons name="stairs" size={32} color={currentTheme.accent} />
          )}
        </View>
      </Pressable>
      {centre && <View>{centre}</View>}
      <Pressable onPress={handleRightPress}>
        <View>
          {right ?? (
            <Icons
              name="account-circle"
              size={32}
              color={currentTheme.accent}
            />
          )}
        </View>
      </Pressable>
    </Container>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
