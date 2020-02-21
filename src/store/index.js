import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import newsfeedReducer from "../reducers/newsfeedReducers";
import profileReducer from "../reducers/profileReducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//this.props.newsfeed.Newsfeed  to connect to map

const initialState = {
  newsfeed: {
    Newsfeed: [],
    post: {}
  },
  profile: {
    profile: {},
    experiences: []
  },
  userToken: undefined
};

const combinedReducers = combineReducers({
  newsfeed: newsfeedReducer,
  profile: profileReducer
});

export default function configureStore() {
  return createStore(
    combinedReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
