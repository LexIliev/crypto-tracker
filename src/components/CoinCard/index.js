import React from 'react';
/* eslint-disable object-curly-newline */
import { View, Text, Image, TouchableOpacity } from 'react-native';
/* eslint-enable object-curly-newline */

import { coinIcons, DEFAULT_ICON } from '../../utils/CoinIcons';

import styles from './styles';

import { formatAmount } from '../../utils';

const CoinCard = (props) => {
  const {
    container,
    icon,
    currencySymbol,
    upperRow,
    symbol,
    name,
    price,
    statistics,
    separator,
    positivePercentageChange,
    negativePercentageChange,
  } = styles;

  const {
    id,
    coinSymbol,
    coinName,
    priceUSD,
    percentChange24h,
    percentChange7d,
    navigation,
  } = props;

  return (
    <TouchableOpacity
      style={container}
      onPress={() => navigation.navigate('Details', { id })}
    >
      <View style={upperRow}>
        <Image
          style={icon}
          source={{
            uri: coinIcons[coinSymbol] || DEFAULT_ICON,
          }}
        />
        <Text style={symbol}>{coinSymbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={name}>{coinName}</Text>
        <Text style={price}>
          {formatAmount(priceUSD, 3)}
          <Text style={currencySymbol}>&nbsp;$</Text>
        </Text>
      </View>
      <View style={statistics}>
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
    </TouchableOpacity>
  );
};

export default CoinCard;
