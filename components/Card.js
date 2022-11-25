import { StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.plumDarker,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 8, // shadow for android
    shadowColor: 'black', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
