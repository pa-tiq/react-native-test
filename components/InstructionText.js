import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const InstructionText = (props) => {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText:{
    color:Colors.yellow,
    fontSize:24,
    padding:5
  },
});
