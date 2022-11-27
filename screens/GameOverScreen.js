import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView
      style={
        width > height ? styles.rootScrollViewLandscape : styles.rootScrollView
      }
    >
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View
          style={
            width > height
              ? styles.imageContainerLandscape
              : styles.imageContainer
          }
        >
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={width > height ? styles.textLandscape : styles.text}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.rounds.length}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.number}</Text>.
        </Text>
        <PrimaryButton onPress={props.onNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const imageSizeLandscape = deviceWidth < 380 ? 75 : 150;
const imageSizePortrait = deviceWidth < 380 ? 150 : 300;

const styles = StyleSheet.create({
  rootScrollView: {
    marginTop: 40,
    flex: 1,
  },
  rootScrollViewLandscape: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerLandscape: {
    width: imageSizeLandscape,
    maxWidth: imageSizeLandscape,
    height: imageSizeLandscape,
    maxHeight: imageSizeLandscape,
    borderRadius: deviceWidth < 380 ? 38 : 75,
    borderWidth: 3,
    borderColor: Colors.plumDarker,
    overflow: 'hidden',
    margin: 20,
  },
  imageContainer: {
    width: imageSizePortrait,
    maxWidth: imageSizePortrait,
    heigth: imageSizePortrait,
    maxHeight: imageSizePortrait,
    borderRadius: deviceWidth < 380 ? 75 : 150,
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
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  textLandscape: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.plumLight,
  },
});
