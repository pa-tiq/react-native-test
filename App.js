import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const changeGoalInputHandler = (goal) => {
    setEnteredGoalText(goal);
  };

  const addGoalHandler = (event) => {
    setGoals((oldValue) => [...oldValue, enteredGoalText]);
  };

  let goalsListScrollView = // renders every item on the list
    (
      <ScrollView>
        {goals.map((goal, idx) => {
          return (
            <View style={styles.goalItem} key={idx}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          );
        })}
      </ScrollView>
    );

  let goalsListFlatList = // lazy rendering, better for dynamic lists
    (
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem} key={itemData.index}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
          );
        }}
      />
    );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='your goal'
          onChangeText={changeGoalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>{goalsListFlatList}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 30,
  },
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
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#1d49a1',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
