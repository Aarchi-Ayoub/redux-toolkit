import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// method for geting all posts from server 
export const GetPosts = createAsyncThunk(
    "posts/getPosts",
    async() => {
        return await await (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
    }
);

// method for geting one post from server 
export const GetPost = createAsyncThunk(
    "posts/getPost",
    async(postID) => {
        return await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)).data
    }
);


// method for deleting one post 
export const DeletePost = createAsyncThunk(
    "posts/deletePost",
    async(postID) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        return postID
    }
);


// method for updating one post 
export const UpdatePost = createAsyncThunk(
    "posts/updatePost",
    async(postID, state) => {
        console.log(state)
        return await (await axios.put(`https://jsonplaceholder.typicode.com/posts/${postID}`, state)).data
    }
);


// method for adding new post 
export const AddPost = createAsyncThunk(
    "posts/addPost",
    async(post) => {
        return await (await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)).data
    }
);