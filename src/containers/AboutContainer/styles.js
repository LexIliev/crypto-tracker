import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width - 60,
    maxHeight: 150,
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 18,
  },
  link: {
    color: '#fe0000',
    fontSize: 16,
    marginTop: 10,
  },
});
