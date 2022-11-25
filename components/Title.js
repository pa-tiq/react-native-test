import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const Title = (props) => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
    padding:12,
    borderWidth:2,
    borderColor: 'white',
  }
});
