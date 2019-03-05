import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../utils/CoinIcons';

import styles from './styles';

import { formatDate, formatAmount } from '../../utils';

export default (CoinDetails = (props) => {
  const {
    container,
    heading,
    image,
    currencySymbol,
    upperRow,
    symbol,
    name,
    price,
    statistics,
    separator,
    negativePercentageChange,
    positivePercentageChange,
    update,
    prizesRow,
    suppliesRow,
    availableSupplies,
    maxSupplies,
  } = styles;

  const {
    coinSymbol,
    coinName,
    priceUSD,
    priceCoin,
    percentChange1h,
    percentChange24h,
    percentChange7d,
    availableSupply,
    maxSupply,
    marketCapUSD,
    lastUpdated,
  } = props;

  return (
    <View style={container}>
      <Text style={heading}>Details: {coinName}</Text>
      <View style={upperRow}>
        <Image style={image} source={{ uri: images[coinSymbol] }} />
        <Text style={symbol}>{coinSymbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={name}>{coinName}</Text>
      </View>
      <View style={prizesRow}>
        <Text style={price}>
          {priceUSD}
          <Text style={currencySymbol}>&nbsp;$</Text>
        </Text>
        <Text style={price}>
          {priceCoin}
          <Text style={currencySymbol}>&nbsp;{coinSymbol}</Text>
        </Text>
      </View>
      <View style={statistics}>
        <Text>
          1h:&nbsp;
          <Text
            style={
              percentChange1h < 0
                ? negativePercentageChange
                : positivePercentageChange
            }
          >
            {percentChange1h}%
          </Text>
        </Text>
        <Text>
          24h:&nbsp;
          <Text
            style={
              percentChange24h < 0
                ? negativePercentageChange
                : positivePercentageChange
            }
          >
            {percentChange24h}%
          </Text>
        </Text>
        <Text>
          7d:&nbsp;
          <Text
            style={
              percentChange7d < 0
                ? negativePercentageChange
                : positivePercentageChange
            }
          >
            {percentChange7d}%
          </Text>
        </Text>
      </View>
      <View style={suppliesRow}>
        <Text>
          Available supply:&nbsp;
          <Text style={availableSupplies}>
            {formatAmount(availableSupply, 0)}
          </Text>
        </Text>
        <Text>
          Max supply:&nbsp;
          <Text style={maxSupplies}>
            {maxSupply !== null ? formatAmount(maxSupply, 0) : '-'}
          </Text>
        </Text>
      </View>
      <View>
        <Text>
          Market cap USD:&nbsp;
          <Text style={update}>{formatAmount(marketCapUSD, 0)}</Text>
        </Text>
      </View>
      <View>
        <Text>
          Last updated:&nbsp;
          <Text style={update}>{formatDate(lastUpdated)}</Text>
        </Text>
      </View>
    </View>
  );
});
