import { StyleSheet, Text } from 'react-native';

const Title = (props) => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign:'center',
    padding:12,
    borderWidth:2,
    borderColor: 'white',
  }
});
