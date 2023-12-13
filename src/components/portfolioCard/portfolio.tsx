import React from 'react';

import {View, Text} from 'react-native';
import {PortfolioProps} from './types';
import {styles} from './styles';

export const PortfolioCard = ({ltp, pnl, quantity, symbol}: PortfolioProps) => {
  const rupee = '₹';
  return (
    <View style={styles.portfolioContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.text16600}>{symbol}</Text>

        <Text style={styles.text16400}>
          LTP: {rupee} <Text style={styles.text16600}>{ltp}</Text>
        </Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.rowContainer}>
        <Text>{quantity}</Text>
        <Text style={styles.text16400}>
          P/L: {rupee} <Text style={styles.text16600}>{pnl}</Text>
        </Text>
      </View>
    </View>
  );
};
