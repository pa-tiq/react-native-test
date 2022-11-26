import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    maxWidth: deviceWidth < 380 ? 150 : 300,
    heigth:  deviceWidth < 380 ? 150 : 300,
    maxHeight:  deviceWidth < 380 ? 150 : 300,
    borderRadius:  deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.plumDarker,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: '100%',
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
