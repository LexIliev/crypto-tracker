import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import Loader from '../../components/Loader';

import { fetchCoinDetails } from '../../actions';
import { CoinDetails } from '../../components';

class CoinDetailsContainer extends Component {
  // Header Styling
  static navigationOptions = {
    title: 'Coin Details',
    headerStyle: {
      backgroundColor: '#1B242F',
      borderBottomColor: '#009CB4',
      borderBottomWidth: 3,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 0);

    this.props.fetchCoinDetails(id);
  }

  render() {
    const {
      coinDetails: { data, isFetching },
    } = this.props;

    const {
      name,
      symbol,
      price_usd,
      price_btc,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      available_supply,
      max_supply,
      market_cap_usd,
      last_updated,
    } = data;

    const { contentContainer } = styles;

    return isFetching ? (
      <Loader isLoading={isFetching} />
    ) : (
      <ScrollView contentContainerStyle={contentContainer}>
        <CoinDetails
          coinName={name}
          coinSymbol={symbol}
          priceUSD={price_usd}
          priceBTC={price_btc}
          percentChange1h={percent_change_1h}
          percentChange24h={percent_change_24h}
          percentChange7d={percent_change_7d}
          availableSupply={available_supply}
          maxSupply={max_supply}
          marketCapUSD={market_cap_usd}
          lastUpdated={last_updated}
        />
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

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails,
});

export default connect(
  mapStateToProps,
  { fetchCoinDetails },
)(CoinDetailsContainer);
