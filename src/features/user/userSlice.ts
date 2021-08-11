import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export interface UserState {
  passWord: string,
  email: string,
  signedIn: boolean;
}

const initialState: UserState = {
   passWord: "hogehoge",
   email: "hoge@hoge.com",
   signedIn: false,
};

/* --------------------------------------
            signIn
-------------------------------------- */
/* --------------------------------------
            blogの全件取得
-------------------------------------- */
// export const fetchUser = createAsyncThunk("user/fetchUser", async() => {
//   const res = await axios.get('http://localhost:3001/blogs')
  
//   // レスポンスの整形
//   const allBlogs = res.data.map((data:any) => ({
//     "id": data.id,
//     "title": data.title,
//     "content": data.content,
//     "createDate": data.createDate,
//     "updateDate": data.updateDate,
//     "likes": data.likes,
//     "completed": data.completed
//   }))
//   const blogNumber = allBlogs.length;
//   const passData = {allBlogs, blogNumber}
//   return passData;
// })

// userSlice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // handleModalOpen: (state, action) => {
    //   state.isModalOpen = action.payload
    // },
  },
  extraReducers: (builder)=> {
    // // stateとactionの型が正しく推論されるためにbuilder関数を用いる
    // builder.addCase(fetchBlogs.fulfilled, (state, action) => {
    //   // action.payload === return passData
    //   state.blogs = action.payload.allBlogs
    //   state.idCount = action.payload.blogNumber
    // })
    // builder.addCase(fetchSelectedBlog.fulfilled, (state, action) => {
    //   // action.payload === return selectedBlogData
    //   state.selectedBlog = action.payload
    // })
  
  }
});

// export const { } = userSlice.actions;


// export const selectBlogs = (state: RootState):UserState["blogs"] => state.blog.blogs;
// export const selectSelectedBlog = (state: RootState):UserState["selectedBlog"] => state.blog.selectedBlog;
// export const selectIsModalOpen = (state: RootState):UserState["isModalOpen"] => state.blog.isModalOpen;

export default userSlice.reducer;