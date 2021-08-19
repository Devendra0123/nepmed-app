import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slice.js';

export const store = configureStore({
    reducer: {
        posts : postReducer
    }
  });
  