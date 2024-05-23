import {ScrollView, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import CustomToggle from '../../components/CustomToggle';
import {useDispatch} from 'react-redux';
import useTheme from '../../hooks/useTheme';
import Divider from '../../components/Divider';

const DevelopmentScreen = () => {
  const dispatch = useDispatch();
  const {currentThemeName, SwitchTheme} = useTheme();
  const [toggle, setToggle] = React.useState(currentThemeName === 'dark');
  const [toggle1, setToggle1] = React.useState(true);

  useEffect(() => {
    if (toggle) {
      SwitchTheme('dark');
    } else {
      SwitchTheme('light');
    }
  }, [SwitchTheme, toggle]);
  return (
    <ScreenContainer>
      <ScrollView>
        <Container style={styles.base}>
          <CustomText style={styles.textHeader}>DevelopmentScreen</CustomText>
        </Container>
        <Container style={styles.apart}>
          <CustomText>Custom Text here</CustomText>
          <CustomToggle value={toggle1} onToggle={setToggle1} />
        </Container>
        <Divider height={3} style={{marginBottom: 10}} />

        <Container style={styles.apart}>
          <CustomText>Enable Dark Theme</CustomText>
          <CustomToggle onToggle={setToggle} value={toggle} />
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

export default DevelopmentScreen;

const styles = StyleSheet.create({
  base: {
    width: '100%',
    alignItems: 'center',
  },
  textHeader: {fontSize: 22},
  apart: {
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
