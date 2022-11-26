import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import { useState, useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

// Keep the splash screen visible while we fetch resources
preventAutoHideAsync();

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState([]);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Tells the splash screen to hide immediately!
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const chosenNumberHandler = (chosenNumber) => {
    setUserNumber(chosenNumber);
  };

  const gameOverHandler = (rounds) => {
    setGameOver(true);
    setRounds(rounds);
  };

  const newGameHandler = () => {
    setUserNumber(null);
    setGameOver(false);
    setRounds([]);
  };

  let screen = <StartGameScreen onNumberPick={chosenNumberHandler} />;
  if (userNumber)
    screen = (
      <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />
    );
  if (gameOver && userNumber)
    screen = (
      <GameOverScreen
        rounds={rounds}
        number={userNumber}
        onNewGame={newGameHandler}
      />
    );

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
    </View>
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
