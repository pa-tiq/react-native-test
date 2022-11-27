import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import ButtonsContainer from '../components/ButtonsContainer';
import ListItem from '../components/ListItem';

function generateRandomBetween(min, max, exclude) {
  if (max - min <= 0) return 0;
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  // in Math.random(), the upper boundry is excluded.
  if (rndNum === exclude && max - min > 0) {
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

  useEffect(() => {
    return () => {
      //exiting game
      min = 1;
      max = 100;
    };
  }, []);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      Alert.alert('I won!', 'I guessed your number!', [
        { text: 'Congrats!', style: 'default' },
      ]);
      onGameOver(rounds);
    } else if (currentGuess === 0){
      Alert.alert('Oops!', "I couldn't guess your number. Let's try again!", [
        { text: 'Ok!', style: 'default' },
      ]);
      setRounds([]);
      setCurrentGuess(generateRandomBetween(1, 100, chosenNumber));
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
      setCurrentGuess((oldGuess) => {
        return generateRandomBetween(min, oldGuess, oldGuess);
      });
    } else {
      min = currentGuess;
      setCurrentGuess((oldGuess) => {
        return generateRandomBetween(oldGuess, max, oldGuess);
      });
    }
  };

  const { width, height } = useWindowDimensions();

  let content = (
    <View style={[styles.screen, { marginTop: 100 }]}>
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
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(roundData) => {
            return (
              <ListItem
                key={roundData.index}
                round={rounds.length - roundData.index}
                guess={roundData.item}
              />
            );
          }}
        />
      </View>
    </View>
  );

  if (width > height) {
    content = (
      <View style={[styles.screen, { marginTop: -50 }]}>
        <Title>Guess</Title>
        <View style={styles.landscape}>
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
          <View style={styles.listContainer}>
            <FlatList
              data={rounds}
              renderItem={(roundData) => {
                return (
                  <ListItem
                    key={roundData.index}
                    round={rounds.length - roundData.index}
                    guess={roundData.item}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return <>{content}</>;
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '70%',
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
