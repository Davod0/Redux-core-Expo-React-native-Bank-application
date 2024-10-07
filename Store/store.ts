import { legacy_createStore as createStore } from "redux";
// Skapa redux storen i den här filen!
// tänk på att installera redux och även react-redux

// CREATE STORE
export const store = createStore(bankReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// DEFINE ACTIONS
type DepositAction = {
    type: "DEPOSIT";
    payload: number;
};

type WithdrawAction = {
    type: "WITHDRAW";
    payload: number;
};

type KnownAction = DepositAction | WithdrawAction;

// DEFINE REDUCER
function bankReducer(state = 10000, action: KnownAction) {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
    }
}