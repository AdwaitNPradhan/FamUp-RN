import {Pressable, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import ScreenContainer from '../components/ScreenContainer';
import CustomText from '../components/CustomText';
import useTheme from '../hooks/useTheme';
import Divider from '../components/Divider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerTab = ({
  icon,
  label,
  onPress,
  textStyle,
}: {
  icon: {name: string; color: string};
  label: string;
  onPress: () => void;
  textStyle: StyleProp<TextStyle>;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.drawerSection}>
        <View style={styles.drawerSectionIconHolder}>
          <Icons name={icon.name} size={20} color={icon.color} />
        </View>
        <CustomText style={textStyle}>{label}</CustomText>
      </View>
    </Pressable>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const {currentTheme} = useTheme();
  const Routes: {
    icon: {name: string; color: string};
    label: string;
    onPress: () => void;
    textStyle: StyleProp<TextStyle>;
  }[] = [
    {
      icon: {name: 'home-variant-outline', color: `${currentTheme.accent}`},
      label: 'Home',
      onPress: () => {
        navigation.navigate('Home');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    {
      icon: {
        name: 'credit-card-plus-outline',
        color: `${currentTheme.accent}`,
      },
      label: 'Finances',
      onPress: () => {
        navigation.navigate('Finances');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    {
      icon: {name: 'cog-outline', color: `${currentTheme.accent}`},
      label: 'Settings',
      onPress: () => {
        navigation.navigate('Settings');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    {
      icon: {name: 'progress-question', color: `${currentTheme.accent}`},
      label: 'Help & Support',
      onPress: () => {
        navigation.navigate('Help&Support');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    {
      icon: {name: 'notebook-outline', color: `${currentTheme.accent}`},
      label: 'Notes',
      onPress: () => {
        navigation.navigate('Notes');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    // {
    //   icon: {name: '', color: `${currentTheme.accent}`},
    //   label: 'Medias',
    //   onPress: () => {
    //     navigation.navigate('Medias');
    //   },
    //   textStyle: [styles.drawerSectionText, {}],
    // },
  ];
  const BottomActions: {
    icon: {name: string; color: string};
    label: string;
    onPress: () => void;
    textStyle: StyleProp<TextStyle>;
  }[] = [
    {
      icon: {name: 'tools', color: `${currentTheme.accent}`},
      label: 'Development',
      onPress: () => {
        navigation.navigate('Development');
      },
      textStyle: [styles.drawerSectionText, {}],
    },
    {
      icon: {name: 'logout', color: `${currentTheme.accent}`},
      label: 'Logout',
      onPress: () => {},
      textStyle: [
        styles.drawerSectionText,
        {
          fontWeight: 'medium',
        },
      ],
    },
  ];

  return (
    <ScreenContainer>
      <View style={styles.drawerContainer}>
        <View style={styles.drawerTop}>
          <Pressable
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <Icons name="close" size={22} color={`${currentTheme.accent}`} />
            </View>
          </Pressable>
        </View>
        <Divider />
        <DrawerContentScrollView
          contentContainerStyle={styles.drawerScrollView}>
          {Routes.map(route => {
            return (
              <DrawerTab
                icon={route.icon}
                label={route.label}
                onPress={route.onPress}
                textStyle={route.textStyle}
              />
            );
          })}
        </DrawerContentScrollView>
        <View style={styles.drawerBottomSection}>
          <Divider />
          {BottomActions.map(route => {
            return (
              <DrawerTab
                icon={route.icon}
                label={route.label}
                onPress={route.onPress}
                textStyle={route.textStyle}
              />
            );
          })}
        </View>
        <View style={{alignItems: 'flex-end', width: '100%'}}>
          <CustomText style={{opacity: 0.5}}>V 1.0</CustomText>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {justifyContent: 'space-between', flex: 1},
  drawerScrollView: {
    flex: 1,
  },
  drawerTop: {
    height: '20%',
    minHeight: 160,
  },
  drawerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 0,
    // backgroundColor: `${CColors.tomato}44`,
    borderRadius: 12,
    marginBottom: 5,
  },
  drawerSectionText: {fontWeight: '200', fontSize: 24},
  drawerSectionIconHolder: {paddingRight: 10},
  drawerBottomSection: {paddingVertical: 10},
});
