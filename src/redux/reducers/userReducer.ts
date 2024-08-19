import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
    tokenInfo: {
        access_token: string,
        access_exp: string
    },
    userInfo: {
        id: string,
        username: string,
        name: string,
        avatar: string,
        cover: string,
        email: string,
        birthday: string
    }
}

const slice = createSlice({
    name: 'user',
    initialState: {
        tokenInfo: {
            access_token: '',
            access_exp: ''
        },
        userInfo: {
            id: '',
            username: '',
            name: '',
            avatar: '',
            cover: '',
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