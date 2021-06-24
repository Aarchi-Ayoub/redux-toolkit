import { createSlice } from '@reduxjs/toolkit'
import { GetPosts, GetPost, DeletePost, UpdatePost } from '../services/PostsServices';
// Initial State
const initialState = {
    posts: [],
    post: {}
};
// Create the slice
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    // Use the async methods
    extraReducers: {
        // Good case
        [GetPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        // Bad case
        [GetPosts.rejected]: (state, { payload }) => {
            state.posts = []
        },
        // Good case
        [GetPost.fulfilled]: (state, action) => {
            state.post = action.payload
        },
        // Bad case
        [GetPost.rejected]: (state, { payload }) => {
            state.post = {}
        },
        [DeletePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        },
        [UpdatePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post.id === action.payload.id ? state.post = action.payload : post)
        }
    }
});
// Export the reducer
export default postsSlice.reducer;