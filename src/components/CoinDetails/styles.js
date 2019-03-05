import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 3,
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
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
  update: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontWeight: 'bold',
  },
  prizesRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
  },
  suppliesRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
  },
  availableSupplies: {
    color: '#00BFA5',
    fontWeight: 'bold',
  },
  maxSupplies: {
    color: '#DD2C00',
    fontWeight: 'bold',
  },
});
