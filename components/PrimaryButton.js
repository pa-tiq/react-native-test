import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '../constants/colors';

const PrimaryButton = (props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.innerContainer, styles.pressed_iOS]
            : styles.innerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.plumLight }}
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
    backgroundColor: Colors.plumDark,
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
