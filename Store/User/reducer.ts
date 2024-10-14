import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { fetchGithubUserName, signUpUser } from "./actions";

type userState = {
    current?: User;
    name: string;
    savingGoal: number;
};

const initialState: userState = {
    current: undefined,
    name: "",
    savingGoal: 0,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setNameAction: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setSavingGoal: (state, action: PayloadAction<number>) => {
            state.savingGoal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGithubUserName.fulfilled, (state, action) => {
            state.name = action.payload;
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    }

});


export const { setNameAction, setSavingGoal } = userSlice.actions;
export default userSlice.reducer;