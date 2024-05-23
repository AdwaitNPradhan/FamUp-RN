// @ts-expect-error TS(2591): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/', './assets/images/', './assets/icons/'],
};
