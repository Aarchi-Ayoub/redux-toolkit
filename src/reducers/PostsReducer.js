import { createSlice } from '@reduxjs/toolkit'
import { GetPosts, GetPost, DeletePost, UpdatePost, AddPost } from '../services/PostsServices';
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
        [GetPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload
        },
        // Bad case
        [GetPosts.rejected]: (state, { payload }) => {
            state.posts = []
        },
        // Good case
        [GetPost.fulfilled]: (state, { payload }) => {
            state.post = payload
        },
        // Bad case
        [GetPost.rejected]: (state, { payload }) => {
            state.post = {}
        },
        // Bad case
        [DeletePost.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.filter(post => post.id !== payload)
        },
        // Good case
        [UpdatePost.fulfilled]: (state, { payload }) => {
            console.log(payload.state)
                // state.post = payload.state
            state.posts.filter(post => post.id === payload.id ? post = payload.state : post)
        },
        // Bad case
        [UpdatePost.rejected]: (state, { payload }) => {
            state.post = {}
        },
        // Good case
        [AddPost.fulfilled]: (state, { payload }) => {
            state.posts = [payload, ...state.posts]
        },
    }
});
// Export the reducer
export default postsSlice.reducer;