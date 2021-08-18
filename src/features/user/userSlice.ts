import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export interface UserState {
  userData: {
    email: string,
    password: string,
  }
}

const initialState: UserState = {
  userData: {email: "",password: ""}
};

/* --------------------------------------
            userの作成
-------------------------------------- */
export const signInUser = createAsyncThunk("user/signInUser", async({email, password}:UserState["userData"]) => {
  const userData = {
    email: email,
    password: password,
  }
  await axios.put("http://localhost:3001/userData", userData)
})

/* --------------------------------------
            userの取得
-------------------------------------- */
export const fetchUser = createAsyncThunk("user/fetchUser", async() => {
  const res = await axios.get('http://localhost:3001/userData')

  // レスポンスの整形
  const userData = {
      email: res.data.email,
      password: res.data.password,
  }
 
  return userData;
})

/* --------------------------------------
            userDataの削除
-------------------------------------- */
export const signOutUser = createAsyncThunk("user/signOutUser", async() => {
  const userData = {
    email: "",
    password: "",
  }
  await axios.put("http://localhost:3001/userData", userData)
  return userData
})


// ------- userSlice -------- //
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder)=> {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userData = action.payload
    })
    builder.addCase(signOutUser.fulfilled, (state, action) => {
      state.userData = action.payload
    })
  }
});

// export const { } = userSlice.actions;

export const selectUserData = (state: RootState):UserState["userData"] => state.user.userData;

export default userSlice.reducer;