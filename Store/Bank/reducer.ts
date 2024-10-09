import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// DEFINE STATE
export type BankState = {
    balance: number;
    transactions: number[];
};

export const initialState: BankState = {
    balance: 0,
    transactions: [],
};

export const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {
        deposit: (state, action: PayloadAction<number>) => {
            state.balance += action.payload;
            state.transactions.push(action.payload);
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload;
            state.transactions.push(-action.payload);
        }
    }
})

export const { deposit, withdraw } = bankSlice.actions;
export default bankSlice.reducer;


