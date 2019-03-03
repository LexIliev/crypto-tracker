import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../utils/CoinIcons';

import styles from './styles';

const CoinCard = (props) => {
  const {
    container,
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
  } = styles;

  const {
    coinSymbol,
    coinName,
    priceUSD,
    percentChange24h,
    percentChange7d,
  } = props;

  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={image} source={{ uri: images[coinSymbol] }} />
        <Text style={symbol}>{coinSymbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={name}>{coinName}</Text>
        <Text style={price}>
          {priceUSD}
          <Text style={currencySymbol}>$</Text>
        </Text>
      </View>
      <View style={statistics}>
        <Text>
          24h:
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
          7d:
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
    </View>
  );
};

export default CoinCard;
