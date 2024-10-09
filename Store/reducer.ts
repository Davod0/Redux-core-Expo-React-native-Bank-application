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
}

const initialState = {
    balance: 0,
}

// DEFINE REDUCER
export function bankReducer(state: BankState = initialState, action: KnownAction) {
    switch (action.type) {
        case "DEPOSIT":
            return { balance: state.balance + action.payload };
        case "WITHDRAW":
            return { balance: state.balance + action.payload };
        default:
            return state;
    }
}