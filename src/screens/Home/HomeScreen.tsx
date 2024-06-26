import {StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import ScreenContainer from '../../components/ScreenContainer';
import CFonts from '../../constants/fonts';

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <CustomText style={{fontFamily: CFonts.roboto}}>HomeScreen</CustomText>
      <CustomText style={{fontFamily: CFonts.quickSand}}>HomeScreen</CustomText>
      <CustomText style={{fontFamily: CFonts.montserrat}}>
        HomeScreen
      </CustomText>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
