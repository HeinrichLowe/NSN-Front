import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
    tokenInfo: {
        token: string,
        exp: string
    },
    userInfo: {
        username: string,
        name: string,
        avatar: string,
        email: string,
        birthday: string
    }
}

const slice = createSlice({
    name: 'user',
    initialState: {
        tokenInfo: {
            token: '',
            exp: ''
        },
        userInfo: {
            username: '',
            name: '',
            avatar: '',
            email: '',
            birthday: ''
        }
    },
    reducers: {
        setTokenInfo: (state, action) => {
            state.tokenInfo = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    }
});

export const { setTokenInfo, setUserInfo } = slice.actions;
export default slice.reducer;