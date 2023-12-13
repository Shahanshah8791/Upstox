import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_C7C7CC,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  holdingsContainer: {
    flex: 1,
  },
  seperator: {
    height: 1,
    width: '90%',
    backgroundColor: Colors.color_C7C7CC,
    alignSelf: 'center',
  },
  totalContainer: {
    backgroundColor: Colors.color_FFFFFF,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text18700: {
    fontSize: 18,
    fontWeight: '700',
  },
  text18500: {
    fontSize: 18,
    fontWeight: '500',
  },
  spacer: {
    marginTop: 20,
  },
});
