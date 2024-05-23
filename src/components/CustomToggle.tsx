import React, {useEffect, useState} from 'react';
import type {ViewStyle} from 'react-native';
import {Animated, TouchableOpacity, View} from 'react-native';
import useTheme from '../hooks/useTheme';

type Props = {
  testID?: string;
  size?: 'medium' | 'large';
  value: boolean;
  disabled?: boolean;
  onToggle: (val: boolean) => void;
};

// Typing limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202

const mediumContainer: ViewStyle = {
  width: 56,
  height: 30,
  borderRadius: 25,
  padding: 5,
};

const mediumCircle: ViewStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
};

const largeContainer: ViewStyle = {
  width: 80,
  height: 40,
  borderRadius: 25,
  padding: 5,
};

const largeCircle: ViewStyle = {
  width: 32,
  height: 32,
  borderRadius: 16,
};

const CustomToggle = ({
  testID,
  value,
  size = 'medium',
  onToggle,
}: Props): JSX.Element => {
  const {currentTheme, currentThemeName} = useTheme();

  const backgroundColorOn = `${
      currentThemeName === 'dark'
        ? currentTheme.others.ghostWhite
        : currentTheme.others.jet
    }4a`,
    backgroundColorOff = `${
      currentThemeName === 'dark'
        ? currentTheme.others.ghostWhite
        : currentTheme.others.jet
    }4a`,
    circleColorOn = currentTheme.accent,
    circleColorOff = currentTheme.others.white,
    container = size === 'large' ? largeContainer : mediumContainer,
    circle = size === 'large' ? largeCircle : mediumCircle;

  const paddingLeft: number =
    (container.padding as number) || (container.paddingLeft as number) || 0;

  const paddingRight: number =
    (container.padding as number) || (container.paddingRight as number) || 0;

  const circlePosXStart = 0;

  const circlePosXEnd =
    ((container.width ?? mediumContainer.width) as number) -
    ((circle.width ?? mediumCircle.width) as number) -
    (paddingRight + paddingLeft);

  const [animXValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    const runAnimation = (): void => {
      const option = {
        fromValue: value ? 0 : 1,
        toValue: value ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      };

      Animated.timing(animXValue, option).start();
    };

    runAnimation();
  }, [animXValue, value]);

  const CircleButton = (
    <Animated.View
      style={[
        circle,
        {
          backgroundColor: animXValue.interpolate({
            inputRange: [0.5, 1],
            outputRange: [
              circleColorOff as string | number,
              circleColorOn as string | number,
            ] as string[] | number[],
          }),
        },
        {
          transform: [
            {
              translateX: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  circlePosXStart as string | number,
                  circlePosXEnd as string | number,
                ] as string[] | number[],
              }),
            },
          ],
        },
      ]}
    />
  );

  const OnElement = (
    <Animated.View style={[{opacity: animXValue}]}>
      {/* {onElement} */}
      <View></View>
    </Animated.View>
  );

  const OffElement = (
    <Animated.View
      style={[
        {
          opacity: animXValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      {/* {offElement} */}
      <View></View>
    </Animated.View>
  );

  return (
    <TouchableOpacity
      accessibilityRole="switch"
      activeOpacity={0.8}
      onPress={() => {
        onToggle(!value);
      }}
      testID={testID}>
      <Animated.View
        style={[
          container,
          {
            paddingLeft,
            paddingRight,
          },
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                backgroundColorOff as string | number,
                backgroundColorOn as string | number,
              ] as string[] | number[],
            }),
          },
        ]}>
        {value ? OnElement : OffElement}
        {CircleButton}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomToggle;
