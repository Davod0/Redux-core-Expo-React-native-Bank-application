import { createAppAsyncThunk } from "../../hooks";

export const fetchGithubUserName = createAppAsyncThunk<string, void>("user/fetch-github-username",
    async (_, thunkApi) => {
        const response = await fetch(`https://api.github.com/users/tsourdox`);
        const json = await response.json();
        console.log(json);
        return json.id;
    }
)

