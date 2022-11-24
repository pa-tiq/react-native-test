import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

const GoalItem = (props) => {
  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.id);
  };

  return (
    <View style={styles.goalItem} key={props.index}>
      <Pressable
        android_ripple={{ color: '#dddddd' }} // press animation on android
        style={({pressed}) => pressed & styles.pressedItem} // press animation on iOS
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: '#1d49a1',
    color: 'white',
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
