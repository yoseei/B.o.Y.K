import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';
import blogs from "../../apis/blogs"
import { iteratorSymbol } from 'immer/dist/internal';
import axios from 'axios';
import { stringify } from 'querystring';


export interface BlogState {

  idCount: number;
   blogs: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean}[]
   selectedBlog: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean},
   isModalOpen: boolean;
}

const initialState: BlogState = {
  idCount: 0,
  // blogs: [{id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false}],
  blogs: [],
  selectedBlog: {id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false},
  isModalOpen: false,
};

/* --------------------------------------
            blogの全件取得
-------------------------------------- */
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async() => {
  const res = await axios.get('http://localhost:3001/blogs')
  
  console.log(res.data)
  // レスポンスの整形
  const allBlogs = res.data.map((data:any) => ({
    "id": data.id,
    "title": data.title,
    "content": data.content,
    "createDate": data.createDate,
    "updateDate": data.updateDate,
    "likes": data.likes,
    "completed": data.completed
  }))
  const blogNumber = allBlogs.length;
  const passData = {allBlogs, blogNumber}
  return passData;
})

/* --------------------------------------
            blogの作成
-------------------------------------- */
type BlogType = {
  title: string,
  content: string,
  createDate: string,
}

export const createBlog = createAsyncThunk("blog/createBlog", async({title, content, createDate}:BlogType)=> {
  const res = await axios.get('http://localhost:3001/blogs')
  
  const allBlogs = res.data.map((data:any) => ({
    "id": data.id,
    "title": data.title,
    "content": data.content,
    "createDate": data.createDate,
    "updateDate": data.updateDate,
    "likes": data.likes,
    "completed": data.completed
  }))

  const blogNumber = allBlogs.length;
  
  await axios.post("http://localhost:3001/blogs", {
    id: blogNumber+1,
    title: title,
    content: content,
    createDate: createDate,
    updateDate: createDate,
    likes: 0,
    completed: false,
  })

})


export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // createBlog: (state, action) =>{
    //   state.idCount++;
    //   const newTitle = {
    //     id: state.idCount,
    //     title: action.payload.title,
    //     content: action.payload.content,
    //     createDate: action.payload.createDate,
    //     updateDate: action.payload.createDate,
    //     likes: 0,
    //     completed: false,
    //   }
    //   state.blogs = [newTitle, ...state.blogs]
    // },
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
   
  },
  extraReducers: (builder)=> {
    // stateとactionの型が正しく推論されるためにbuilder関数を用いる
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      // action.payload === return passData
      state.blogs = action.payload.allBlogs
      state.idCount = action.payload.blogNumber
    } )
  }
 
});

export const { handleModalOpen } = blogSlice.actions;


export const selectBlogs = (state: RootState):BlogState["blogs"] => state.blog.blogs;
export const selectIsModalOpen = (state: RootState):BlogState["isModalOpen"] => state.blog.isModalOpen;

export default blogSlice.reducer;
