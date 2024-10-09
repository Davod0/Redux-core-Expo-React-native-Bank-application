// DEFINE ACTIONS
export type DepositAction = {
    type: "DEPOSIT";
    payload: number;
};

export type WithdrawAction = {
    type: "WITHDRAW";
    payload: number;
};
