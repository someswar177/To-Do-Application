import { createStore } from 'redux';
import todoReducer from './reducer';

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

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.log('Error saving state to local storage:', error);
  }
};

const persistedState = loadState();

const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
