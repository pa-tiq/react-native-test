import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Dimensions,
  useWindowDimensions
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
  const { width, height } = useWindowDimensions();
  const marginTop = height < 400 ? 50 : 100;
  return (
    <View style={[styles.rootContainer,{marginTop: marginTop}]}>
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

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop: deviceHeight < 400 ? 30 : 100,
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
