import React, {useEffect, useState, useMemo} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {PortfolioProps} from './types';
import {Header} from '../../components/header/header';
import {PortfolioCard} from '../../components/portfolioCard/portfolio';
import Colors from '../../constants/Colors';

export const Portfolio = () => {
  const rupee = '₹';
  const [portfolio, setPortfolio] = useState<PortfolioProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPortfolio = () => {
    fetch('https://run.mocky.io/v3/4a76b093-b79d-49f5-9757-a709031c539d')
      .then(response => response.json())
      .then(data => {
        const {userHolding} = data;
        userHolding.map((item: PortfolioProps) => {
          const current = convertToDecimal(item.ltp * item.quantity);
          const investment = convertToDecimal(item.avgPrice * item.quantity);
          item.current = current;
          item.investment = investment;
          item.pnl = convertToDecimal(current - investment);
        });
        setPortfolio([...userHolding]);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const convertToDecimal = (number: number) => {
    return Math.round(number * 100) / 100;
  };

  const currentTotalValue = useMemo(() => {
    const initialValue = 0;
    const sumWithInitial = portfolio.reduce(
      (accumulator: number, currentValue: PortfolioProps) =>
        accumulator + currentValue.current,
      initialValue,
    );
    return sumWithInitial;
  }, [portfolio]);

  const investmentTotalValue = useMemo(() => {
    const initialInvestmentValue = 0;
    const sumInvestmentInitial = portfolio.reduce(
      (accumulator: number, currentValue: PortfolioProps) =>
        accumulator + currentValue.investment,
      initialInvestmentValue,
    );
    return sumInvestmentInitial;
  }, [portfolio]);

  const todaysPnL = useMemo(() => {
    const initialTodaysPnLValue = 0;
    const sumTodaysPnL = portfolio.reduce(
      (accumulator: number, currentValue: PortfolioProps) =>
        accumulator +
        (currentValue.avgPrice - currentValue.ltp) * currentValue.quantity,
      initialTodaysPnLValue,
    );
    return sumTodaysPnL;
  }, [portfolio]);

  const totalPnL = useMemo(() => {
    return convertToDecimal(currentTotalValue - investmentTotalValue);
  }, [investmentTotalValue, currentTotalValue]);

  const renderPortfolio = ({item}: {item: PortfolioProps}) => {
    return (
      <View>
        <PortfolioCard
          ltp={item.ltp}
          pnl={item.pnl}
          quantity={item.quantity}
          symbol={item.symbol}
        />
      </View>
    );
  };
  const renderItemSeperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Upstox Holding" />

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={Colors.color_75147C} />
        </View>
      ) : (
        <>
          <View style={styles.holdingsContainer}>
            <FlatList
              data={portfolio}
              renderItem={renderPortfolio}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={renderItemSeperator}
            />
          </View>

          <View style={styles.totalContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.text18700}>Current Value:</Text>
              <Text style={styles.text18500}>
                {rupee}
                {currentTotalValue}
              </Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.rowContainer}>
              <Text style={styles.text18700}>Total Investment:</Text>
              <Text style={styles.text18500}>
                {rupee}
                {investmentTotalValue}
              </Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.rowContainer}>
              <Text style={styles.text18700}>Today's Profit & Loss:</Text>
              <Text style={styles.text18500}>
                {rupee}
                {todaysPnL}
              </Text>
            </View>
            <View style={styles.spacer} />

            <View style={styles.spacer} />
            <View style={styles.rowContainer}>
              <Text style={styles.text18700}>Profit & Loss:</Text>
              <Text style={styles.text18500}>
                {rupee}
                {totalPnL}
              </Text>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
