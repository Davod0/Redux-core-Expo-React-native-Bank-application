import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../../firebase";
import { createAppAsyncThunk } from "../../hooks";

export const fetchGithubUserName = createAppAsyncThunk<string, void>("user/fetch-github-username",
    async (_, thunkApi) => {
        const response = await fetch(`https://api.github.com/users/tsourdox`);
        const json = await response.json();
        // console.log(json);
        return json.name;
    }
);

type signUpPayload = {
    email: string,
    password: string
}

export const signUpUser = createAppAsyncThunk<User, signUpPayload>(
    "user/sign-up", async (payload, thunkApi) => {
        try {
            // console.log("email: ", payload.email);
            // console.log("password: ", payload.password);
            const result = await createUserWithEmailAndPassword(
                auth,
                payload.email,
                payload.password
            );
            console.log("user: ", result.user);
            return result.user;
        } catch (error) {
            console.error(error);
            return thunkApi.rejectWithValue("Could not register!");
        }
    }
)

