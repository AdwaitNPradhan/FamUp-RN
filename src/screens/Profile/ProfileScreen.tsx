import {StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import ScreenContainer from '../../components/ScreenContainer';
import CFonts from '../../constants/fonts';

const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <CustomText style={{fontFamily: CFonts.roboto}}>ProfileScreen</CustomText>
      <CustomText style={{fontFamily: CFonts.quickSand}}>
        ProfileScreen
      </CustomText>
      <CustomText style={{fontFamily: CFonts.montserrat}}>
        ProfileScreen
      </CustomText>
    </ScreenContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
