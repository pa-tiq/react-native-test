import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import React, { useState } from 'react';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const changeGoalInputHandler = (goal) => {
    setEnteredGoalText(goal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='your goal'
        onChangeText={changeGoalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 5,
  },
});
