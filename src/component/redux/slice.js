import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    status: 'idle',
    error: null
  }

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('http://localhost:5000/uploadPost');
    return response
  })
  
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      allPosts: (state,action)=>{
        return  state.posts
      }
    },
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchPosts.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      },
      [fetchPosts.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }
    }
  });

  export const { allPosts } = postsSlice.actions;
  export default postsSlice.reducer;