// DEFINE STATE
export type BankState = {
    balance: number;
    transactions: number[];
};

export const initialState = {
    balance: 0,
    transactions: [],
};