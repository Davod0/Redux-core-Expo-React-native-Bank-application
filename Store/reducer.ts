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

// DEFINE STATE
type BankState = {
    balance: number;
    transactions: number[];
};

const initialState = {
    balance: 0,
    transactions: [],
};

// DEFINE REDUCER
export function bankReducer(
    state: BankState = initialState,
    action: KnownAction
): BankState {
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload, transactions: [...state.transactions, action.payload] };
        case "WITHDRAW":
            return { ...state, balance: state.balance + action.payload, transactions: [...state.transactions, -action.payload] };
        default:
            return state;
    }
}
