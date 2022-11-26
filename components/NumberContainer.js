import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth:4,
    borderColor: Colors.yellow,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },  
  number: {
    color: Colors.yellow,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily:'open-sans-bold'
  },
});
