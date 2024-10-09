type setNameAction = {
    type: "SET_NAME";
    paylod: string;
};

type setSavingGoalAction = {
    type: "SET_SAVING_GOAL";
    payload: number;
};

type KnownActions = setNameAction | setSavingGoalAction;

type userState = {
    name: string;
    savingGoal: number;
};

const initialState: userState = {
    name: "",
    savingGoal: 0,
};


export default function userReducer(state: userState = initialState, action: KnownActions): userState {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.paylod,
            };
        case "SET_SAVING_GOAL":
            return {
                ...state,
                savingGoal: action.payload,
            };
        default:
            action satisfies never;
            return state;
    }
}