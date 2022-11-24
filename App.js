import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((oldValue) => [
      ...oldValue,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((oldValue) => oldValue.filter((goal) => goal.id !== id));
  };

  // lazy rendering, better for dynamic lists
  const goalsListFlatList = (
    <FlatList
      data={goals}
      renderItem={(itemData) => {
        return (
          <GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            key={itemData.index}
            onDeleteGoal={deleteGoalHandler}
          />
        );
      }}
    />
  );

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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

  goalsContainer: {
    flex: 8,
  },
});
