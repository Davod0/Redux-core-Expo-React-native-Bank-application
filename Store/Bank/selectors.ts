import { RootState } from "../store";

export const selectBank = (state: RootState) => state.bank;
export const selectBalance = (state: RootState) => state.bank.balance;
// Den här selector använder sig av en annan selector för att återvända tidigare logik
export const selectTransactions = (state: RootState) => selectBank(state).transactions;
