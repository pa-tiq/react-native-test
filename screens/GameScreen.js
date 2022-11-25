import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import ButtonsContainer from '../components/ButtonsContainer';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  // in Math.random(), the upper boundry is excluded.
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let min = 1;
let max = 100;

const GameScreen = (props) => {
  const { chosenNumber, onGameOver } = props;
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([]);

  useEffect(()=>{
    return () => { //exiting game
      min = 1;
      max = 100;
    };
  },[]);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      Alert.alert('I won!', 'I guessed your number!', [
        { text: 'Congrats!', style: 'default' },
      ]);
      onGameOver(rounds);
    } else {
      setRounds((oldValues) => [currentGuess, ...oldValues]);
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && chosenNumber > currentGuess) ||
      (direction === 'greater' && chosenNumber < currentGuess)
    ) {
      Alert.alert("You're a liar!", 'You know this is wrong!', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      max = currentGuess;
      setCurrentGuess(generateRandomBetween(min, currentGuess, currentGuess));
    } else {
      min = currentGuess;
      setCurrentGuess(generateRandomBetween(currentGuess, max, currentGuess));
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <ButtonsContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={30} color='white' />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name='md-add' size={30} color='white' />
          </PrimaryButton>
        </ButtonsContainer>
      </Card>
      <View>
        <FlatList
          data={rounds}
          renderItem={(roundData) => {
            return <Text key={roundData.index}>{roundData.item}</Text>;
          }}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
});
