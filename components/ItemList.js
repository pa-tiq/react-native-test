import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const ItemList = (props) => {
  return (
    <View>
      <Text>Round {props.round}</Text>
      <Text>Guess: {props.guess}</Text>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  listItem:{
    borderColor:Colors.plumDark,
  }
});
