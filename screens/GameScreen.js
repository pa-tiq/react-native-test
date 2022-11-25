import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
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

const GameScreen = (props) => {

  const {chosenNumber, onGameOver} = props;
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);  

  useEffect(()=>{
    if(currentGuess === chosenNumber){
      Alert.alert("I won!", 'I guessed your number!', [
        { text: 'Congrats!', style: 'default' },
      ]);
      onGameOver();
    }
  },[currentGuess,chosenNumber,onGameOver])

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
      setMax(currentGuess);
    } else {
      setMin(currentGuess);
    }
    setCurrentGuess(generateRandomBetween(min, max, currentGuess));
  };

  return (
    <View style={styles.screen}>
      <Title>Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <ButtonsContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        </ButtonsContainer>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop:100,
    padding: 12,
  },
});
