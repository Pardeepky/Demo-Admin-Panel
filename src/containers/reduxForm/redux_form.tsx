import { createStore, combineReducers } from "redux";

const ReduxForm = require("redux-form");

const {reducer} = ReduxForm;

const rootReducer = combineReducers({
  form: reducer,
});

const store = createStore(rootReducer);

export default store;


