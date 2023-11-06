import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, updateTask, deleteTask, Task} from '../reducers/TaskReducer'; //importing redux actions and types related to Tasks
import {RootState} from '../redux/store'; //Importing the Rootstate type ftom the redux store
import {styles} from '../styles/Task.styles'; //importing styles for the Taskscreenimpo
import Icon from 'react-native-vector-icons/FontAwesome6';

//Defining the task screen component
const TaskScreen: React.FC<any> = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks); //Accessing tasks from the redux store
  const dispatch = useDispatch(); //Accessing the dispatch function from redux
  const [newTaskText, setNewTaskText] = useState(''); // Setting up state for the new task text
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null); // Setting up state for the task being edited
  const [updatedTaskText, setUpdatedTaskText] = useState(''); // Setting up state for the updated task text

  // Function to handle adding a new task or updating an existing one
  const handleAddTask = () => {
    if (newTaskText.trim()) {
      if (editingTaskId) {
        dispatch(updateTask({id: editingTaskId, text: updatedTaskText})); // Dispatching the updateTask action
        setEditingTaskId(null); // Resetting the editing task ID
        setUpdatedTaskText(''); // Clearing the updated task text
      } else {
        const newTask: Task = {
          id: Math.random().toString(), // Generating a unique ID for the new task
          text: newTaskText.trim(), // Storing the trimmed task text
        };
        dispatch(addTask(newTask)); // Dispatching the addTask action
        setNewTaskText(''); // Clearing the new task text
      }
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId)); // Dispatching the deleteTask action
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); //2 second delay
  };
  // Rendering the UI components for the TaskScreen
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} // Adding the onRefresh function to the RefreshControl
          />
        }
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('User')}>
          <Icon name="user-circle" size={30} color="#800080" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FloorMap')}>
          <Icon name="map" size={30} color="#800080" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskScreen; // Exporting the TaskScreen component
