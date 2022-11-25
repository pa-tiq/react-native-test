import { StyleSheet, View, Text, Pressable } from 'react-native';

const PrimaryButton = (props) => {
  const pressHandler = () => {};

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.innerContainer, styles.pressed_iOS]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#e30f79' }}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    padding: 8,
    textAlign: 'center',
    color: 'white',
  },
  pressed_iOS: {
    opacity: 0.75,
  },
});
