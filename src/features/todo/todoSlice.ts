import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchAllTodos = createAsyncThunk(
  "todos/fetchAllTodos", // typePrefix: 非同期処理の状態に応じて、todos/fetchAllTodos/pending のようなActionTypeが作成される
  async () => { // payloadCreator
    const data:any = await axios.get(`http://localhost:3001/todos`) // API経由でTodoリスト取得する
    console.log(data)
    return data ; // action.payloadとしてReducerで読み取れる
  }
);

type TodoState = {
  todoItems: [],
}
const initialState: TodoState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // fetchAllTodosというcreateAsyncThunkが正常終了した場合のReducer
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todoItems = action.payload.data; // payloadCreatorでreturnされた値
    });
  },
});

export default todoSlice.reducer;