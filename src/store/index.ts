import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from 'redux-thunk';
import { contactsReducer } from "./reducers/reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  contacts: contactsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
