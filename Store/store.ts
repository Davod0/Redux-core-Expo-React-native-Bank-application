import { combineReducers, legacy_createStore as createStore } from "redux";
import { bankReducer } from "./Bank/reducer";
import userReducer from "./User/reducer";
// Skapa redux storen i den här filen!
// tänk på att installera redux och även react-redux

// CREATE STORE
export const store = createStore(combineReducers({
    bank: bankReducer,
    user: userReducer
}));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
