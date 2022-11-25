import { StyleSheet, View } from 'react-native';

const ButtonsContainer = (props) => {
  return (
    <View style={styles.buttonsContainer}>
      {props.children.map((button,index) => (
        <View style={styles.buttonContainer} key={`button_${index}`}>
          {button}
        </View>
      ))}
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
