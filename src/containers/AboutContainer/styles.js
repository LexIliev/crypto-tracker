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
    width: width,
    maxHeight: 150,
  },

  title: {
    color: '#1B242F',
    fontSize: 30,
  },

  subTitle: {
    color: '#5e6965',
    fontSize: 18,
  },

  link: {
    color: '#009CB4',
    fontSize: 16,
    marginTop: 10,
  },
});
