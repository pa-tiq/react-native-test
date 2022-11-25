import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import ButtonsContainer from '../components/ButtonsContainer';
import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandle = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const confirmInputHandler = () => {
    const n = parseInt(enteredNumber);
    if (isNaN(n) || n <= 0 || n > 99) {
      Alert.alert('Invalid number!', 'Insert a number between 1 and 99', [
        { text: 'Ok', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    props.onNumberPick(n);
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Oieeeeeee</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType='decimal-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandle}
          value={enteredNumber}
        />
        <ButtonsContainer>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </ButtonsContainer>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
});
