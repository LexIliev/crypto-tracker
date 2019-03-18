import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#009CB4',
    borderBottomWidth: 2,
    paddingVertical: 20,
    marginHorizontal: 20,
  },

  icon: {
    width: 35,
    height: 35,
  },

  currencySymbol: {
    fontWeight: 'bold',
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

  price: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
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

  separator: {
    marginTop: 10,
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
