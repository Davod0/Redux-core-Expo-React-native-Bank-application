import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./Bank/reducer";
import userReducer from "./User/reducer";


// CREATE STORE
export const store = configureStore({
    reducer: {
        bank: bankReducer,
        user: userReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
