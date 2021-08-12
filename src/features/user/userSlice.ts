import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import React from 'react';

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
// export const deleteUserData = createAsyncThunk("user/deleteUserData", async({email, password}:UserState["userData"]) => {
//   await axios.delete("http://localhost:3001/userData", {email: email, password: password})
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// })


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
  }
});

// export const { } = userSlice.actions;


export const selectUserData = (state: RootState):UserState["userData"] => state.user.userData;
// export const selectSelectedBlog = (state: RootState):UserState["selectedBlog"] => state.blog.selectedBlog;
// export const selectIsModalOpen = (state: RootState):UserState["isModalOpen"] => state.blog.isModalOpen;

export default userSlice.reducer;