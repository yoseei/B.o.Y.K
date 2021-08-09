import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

// API経由でTodoリストを取得するメソッド
// 非同期処理の状態に応じて、fetchAllTodos.pending のようなActionCreatorが作成される
export const fetchAllTodos = createAsyncThunk(
  "todos/fetchAllTodos", // typePrefix: 非同期処理の状態に応じて、todos/fetchAllTodos/pending のようなActionTypeが作成される
  async () => { // payloadCreator
    const data:any = await axios.get(`http://localhost:3001/todos`) // API経由でTodoリスト取得する
    console.log(data)
    return {todos: data}  // action.payloadとしてReducerで読み取れる
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
      state.todoItems = action.payload.todos; // payloadCreatorでreturnされた値
    });
  },
});

export default todoSlice.reducer;