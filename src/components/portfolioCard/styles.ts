import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  portfolioContainer: {
    backgroundColor: Colors.color_FFFFFF,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text16600: {
    fontSize: 16,
    fontWeight: '600',
  },
  text16400: {
    fontSize: 16,
    fontWeight: '400',
  },
  spacer: {
    marginTop: 10,
  },
});
