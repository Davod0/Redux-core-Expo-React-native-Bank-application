import { DepositAction, WithdrawAction } from "./actions";
import { BankState, initialState } from "./states";

type KnownAction = DepositAction | WithdrawAction;


// DEFINE REDUCER
export function bankReducer(
    state: BankState = initialState,
    action: KnownAction,
): BankState {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [...state.transactions, action.payload],
            };
        case "WITHDRAW":
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [...state.transactions, -action.payload],
            };
        default:
            return state;
    }
}
