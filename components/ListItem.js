import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Round {props.round}</Text>
      <Text style={styles.itemText}>Guess: {props.guess}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem:{
    borderColor:Colors.plumDark,
    borderWidth: 1,
    borderRadius: 40,
    padding:12,
    marginVertical:8,
    backgroundColor:Colors.yellow,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText:{
    fontFamily: 'open-sans',
  }
});
