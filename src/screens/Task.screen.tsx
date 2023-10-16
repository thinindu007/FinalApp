import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, updateTask, deleteTask, Task} from '../reducers/TaskReducer';
import {RootState} from '../redux/store';
import {styles} from '../styles/Task.styles';

const TaskScreen: React.FC<any> = ({navigation}) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [updatedTaskText, setUpdatedTaskText] = useState('');
  const handleAddTask = () => {
    if (newTaskText.trim()) {
      if (editingTaskId) {
        dispatch(updateTask({id: editingTaskId, text: updatedTaskText}));
        setEditingTaskId(null);
        setUpdatedTaskText('');
      } else {
        const newTask: Task = {
          id: Math.random().toString(),
          text: newTaskText.trim(),
        };
        dispatch(addTask(newTask));
        setNewTaskText('');
      }
    }
  };
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTaskText}
          onChangeText={setNewTaskText}
          placeholder="Enter a new task"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            {item.id === editingTaskId ? (
              <TextInput
                style={styles.editTaskInput}
                value={updatedTaskText}
                onChangeText={setUpdatedTaskText}
                onSubmitEditing={handleAddTask}
                onBlur={() => {
                  setEditingTaskId(null);
                  setUpdatedTaskText('');
                }}
              />
            ) : (
              <Text style={styles.taskText}>{item.text}</Text>
            )}
            <TouchableOpacity
              onPress={() => {
                if (item.id === editingTaskId) {
                  setEditingTaskId(null);
                } else {
                  setEditingTaskId(item.id);
                  setUpdatedTaskText(item.text);
                }
              }}>
              <Text style={styles.editButton}>
                {item.id === editingTaskId ? 'Save' : 'Edit'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('User')}>
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FloorMap')}>
          <Text style={styles.buttonText}>Floor Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskScreen;
