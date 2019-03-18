import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import Loader from '../../components/Loader';

import { fetchCoinsListData } from '../../actions';
import { CoinCard } from '../../components';

class CoinsListContainer extends Component {
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
    this.props.fetchCoinsListData();
  }

  renderCoinCards() {
    const {
      coinsList: { data },
      navigation,
    } = this.props;

    return (
      data &&
      data.map((coin) => {
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
    const {
      coinsList: { isFetching },
    } = this.props;
    const { contentContainer } = styles;

    return isFetching ? (
      <Loader isLoading={isFetching} />
    ) : (
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

const mapStateToProps = (state) => ({
  coinsList: state.coinsList,
});

export default connect(
  mapStateToProps,
  { fetchCoinsListData },
)(CoinsListContainer);
