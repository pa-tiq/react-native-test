import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  const chosenNumberHandler = (chosenNumber) => {
    setUserNumber(chosenNumber);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  let screen = <StartGameScreen onNumberPick={chosenNumberHandler} />;
  if (userNumber)
    screen = <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />;
  if (gameOver && userNumber) screen = <GameOverScreen />;

  return (
    <LinearGradient
      colors={[Colors.plumBackground, Colors.yellowBackground]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
