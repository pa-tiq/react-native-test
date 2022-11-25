import { StyleSheet, View, Text, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  console.log(props.rounds);
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{props.rounds.length}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{props.number}</Text>.
      </Text>
      <PrimaryButton onPress={props.onNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    heigth: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.plumDarker,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: 300,
    height: 300,
    overflow:'hidden'
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.plumLight,
  },
});
