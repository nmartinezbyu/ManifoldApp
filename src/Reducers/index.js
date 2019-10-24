import { combineReducers } from 'redux';

const connectReducer = (last=null, action) => {
  if (action.type === "PICO_CONNECT") {
    return action.payload;
  }
  else return last
};

const eventReducer = (last=null, action) => {
  if (action.type === "RAISE_EVENT") {
    return action.payload;
  }
  else return last
};

const queryReducer = (last=null, action) => {
  if (action.type === "QUERY") {
    return action.payload;
  }
  else return last
};

export default combineReducers({
  connect: connectReducer,
  event: eventReducer,
  query: queryReducer
});
