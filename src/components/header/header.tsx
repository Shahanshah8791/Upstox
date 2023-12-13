import React from 'react';
import {View, Text} from 'react-native';
import {HeaderProps} from './types';
import {styles} from './styles';

export const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
