import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchCryptoData } from '../actions';
import CoinCard from '../components/CoinCard/CoinCard';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCryptoData();
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return (
      crypto.data &&
      crypto.data.map((coin) => {
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
            coinName={name}
            coinSymbol={symbol}
            priceUSD={price_usd}
            percentChange24h={percent_change_24h}
            percentChange7d={percent_change_7d}
          />
        );
      })
    );
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
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
    paddingTop: 55,
  },
};

mapStateToProps = (state) => ({
  crypto: state.crypto,
});

export default connect(
  mapStateToProps,
  { fetchCryptoData },
)(CryptoContainer);
