import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import PostsReducer from './reducers/PostsReducer'
export const store = configureStore({
    reducer: {
        post: PostsReducer
    }
})