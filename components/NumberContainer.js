import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth:4,
    borderColor: Colors.yellow,
    padding:28,
    borderRadius:8,
    margin:24,
    alignItems:'center',
    justifyContent:'center'
  },  
  number: {
    color: Colors.yellow,
    fontSize: 36,
    fontWeight: 'bold'
  },
});
