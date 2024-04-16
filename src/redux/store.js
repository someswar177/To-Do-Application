import { createStore } from 'redux';
import todoReducer from './reducer';

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log('Error loading state from local storage:', error);
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.log('Error saving state to local storage:', error);
  }
};

// Load persisted state from local storage
const persistedState = loadState();

// Create Redux store with persisted state
const store = createStore(todoReducer, persistedState);

// Subscribe to store updates and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
