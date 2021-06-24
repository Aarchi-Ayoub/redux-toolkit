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
        return await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)).data
    }
);


// method for updating one post 
export const UpdatePost = createAsyncThunk(
    "posts/updatePost",
    async(postID, post) => {
        return await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`, post)).data
    }
);