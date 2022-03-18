import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {UserSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(UserSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(UserSlice.actions.usersFetchingSucces(response.data))
//     } catch (e) {
//         // @ts-ignore
//         dispatch(UserSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("errrrrror")
        }
    }
)
