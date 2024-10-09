import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
    name: string;
    savingGoal: number;
};

const initialState: userState = {
    name: "",
    savingGoal: 0,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setSavingGoal: (state, action: PayloadAction<number>) => {
            state.savingGoal = action.payload;
        },
    },
});

export const { setName, setSavingGoal } = userSlice.actions;
export default userSlice.reducer;