import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../utils/CoinIcons';

import styles from './styles';

import { formatAmount } from '../../utils';
const DEFAULT_IMAGE =
  'https://img.icons8.com/material-sharp/24/000000/link.png';

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
      onPress={() =>
        navigation.navigate('Details', {
          id,
        })
      }
    >
      <View style={upperRow}>
        <Image
          style={image}
          source={{
            uri: images[coinSymbol] || DEFAULT_IMAGE,
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
