import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchCryptoData } from '../../actions';
import CoinCard from '../../components/CoinCard';

class CryptoContainer extends Component {
  static navigationOptions = {
    title: 'Cryptocurrency Tracker App',
    headerStyle: {
      backgroundColor: '#1B242F',
      borderBottomColor: '#009CB4',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      color: '#fff',
    },
  };

  componentDidMount() {
    this.props.fetchCryptoData();
  }

  renderCoinCards() {
    const { cryptoList, navigation } = this.props;

    return (
      cryptoList.data
      && cryptoList.data.map((coin) => {
        const {
          id,
          name,
          symbol,
          price_usd,
          percent_change_24h,
          percent_change_7d,
        } = coin;

        return (
          <CoinCard
            key={id}
            id={id}
            coinName={name}
            coinSymbol={symbol}
            priceUSD={price_usd}
            percentChange24h={percent_change_24h}
            percentChange7d={percent_change_7d}
            navigation={navigation}
          />
        );
      })
    );
  }

  render() {
    const { cryptoList } = this.props;
    const { contentContainer } = styles;

    if (cryptoList.isFetching) {
      return (
        <View>
          <Spinner
            visible={cryptoList.isFetching}
            textContent="Loading..."
            textStyle={{ color: '#253145' }}
            animation="fade"
          />
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 5,
  },
};

const mapStateToProps = state => ({
  cryptoList: state.cryptoList,
});

export default connect(
  mapStateToProps,
  { fetchCryptoData },
)(CryptoContainer);
