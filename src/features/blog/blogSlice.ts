import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';
import blogs from "../../apis/blogs"
import { iteratorSymbol } from 'immer/dist/internal';


export interface BlogState {
   // blogが何個あるのかを管理する

  idCount: number;
   // storeに保存するblogの一覧
   blogs: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean}[]
   // blogのtitle,contentを編集する際にどのblogが選択されているか
   selectedBlog: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean},
   // modalを開くか閉じるかのフラグ
   isModalOpen: boolean;
}

const initialState: BlogState = {
  idCount: 0,
  // storeに保存するblogの一覧
  blogs: [{id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false}],
  // blogのtitle,contentを編集する際にどのblogが選択されているか
  selectedBlog: {id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false},
  // modalを開くか閉じるかのフラグ
  isModalOpen: false,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // blogの作成
    createBlog: (state, action) =>{
      state.idCount++;
      const newTitle = {
        id: state.idCount,
        title: action.payload.title,
        content: action.payload.content,
        createDate: action.payload.createDate,
        updateDate: action.payload.createDate,
        likes: 0,
        completed: false,
      }
      state.blogs = [newTitle, ...state.blogs]
      blogs.post("/blogs", state.blogs)
    },

    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
   
  },
 
});

export const { createBlog, handleModalOpen } = blogSlice.actions;


export const selectBlogs = (state: RootState):BlogState["blogs"] => state.blog.blogs;
export const selectIsModalOpen = (state: RootState):BlogState["isModalOpen"] => state.blog.isModalOpen;

export default blogSlice.reducer;
