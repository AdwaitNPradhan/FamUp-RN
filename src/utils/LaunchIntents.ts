import {Linking} from 'react-native';

const CallNumber = (phone: string) => Linking.openURL(`tel:${phone}`);
const StartMail = (receipient: string, subject?: string) =>
  Linking.openURL(
    `mailto:${receipient}${subject ? `?subject=${subject}` : ''}`,
  );
const OpenURL = (url: string) => Linking.openURL(url);

export {CallNumber, StartMail, OpenURL};
