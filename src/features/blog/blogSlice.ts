import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';
import blogs from "../../apis/blogs"
import { iteratorSymbol } from 'immer/dist/internal';


export interface BlogState {

  idCount: number;
   blogs: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean}[]
   selectedBlog: {id: number; title: string; content: string; createDate: string; updateDate:string; likes: number; completed: boolean},
   isModalOpen: boolean;
}

const initialState: BlogState = {
  idCount: 0,
  blogs: [{id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false}],
  selectedBlog: {id: 0, title: "", content: "", createDate: "", updateDate: "", likes: 0, completed: false},
  isModalOpen: false,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
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
    },
    postJson: (state) => {
      const submitName = () => async () => {
        await blogs.post('/blogs', ...state.blogs)
     

        // method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(state.blogs.slice(-1)[0]),
      }
      submitName()
    },
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
   
  },
 
});

export const { createBlog, handleModalOpen, postJson } = blogSlice.actions;


export const selectBlogs = (state: RootState):BlogState["blogs"] => state.blog.blogs;
export const selectIsModalOpen = (state: RootState):BlogState["isModalOpen"] => state.blog.isModalOpen;

export default blogSlice.reducer;
