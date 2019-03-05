import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  symbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  name: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  separator: {
    marginTop: 10,
  },
  price: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
  },
  currencySymbol: {
    fontWeight: 'bold',
  },
  statistics: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  positivePercentageChange: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  negativePercentageChange: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});