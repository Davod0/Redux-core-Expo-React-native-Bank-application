import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
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

type credentialsPaylod = {
    email: string,
    password: string
}

export const signUpUser = createAppAsyncThunk<User, credentialsPaylod>(
    "user/sign-up", async (payload, thunkApi) => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                payload.email,
                payload.password
            );
            console.log("user: ", result.user.toJSON() as User);
            return result.user.toJSON() as User;
        } catch (error) {
            console.error(error);
            return thunkApi.rejectWithValue("Could not register!");
        }
    }
)

export const signInUser = createAppAsyncThunk<User, credentialsPaylod>(
    "user/sign-in", async (payload, thunkApi) => {
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                payload.email,
                payload.password
            );
            console.log("user: ", result.user.toJSON() as User);
            return result.user.toJSON() as User;
        } catch (error) {
            console.error(error);
            return thunkApi.rejectWithValue("Could not sign in!");
        }
    }
)

