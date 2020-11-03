import { combineReducers } from 'redux';

const indecre = (count = 0, action) => {
  if (action.type === 'increment') {
    return count + 1;
  } else if (action.type === 'decrement') {
    return count - 1;
  } else if (action.type === 'reset') {
    return (count = 0);
  } else {
    return count;
  }
};

export default combineReducers({
  count: indecre,
});
