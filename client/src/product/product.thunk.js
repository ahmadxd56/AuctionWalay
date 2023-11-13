import { createAsyncThunk } from "@reduxjs/toolkit"
import productService from "./product.service"


//all blog posts 
export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {
    try {
        return await productService.getAllProducts()
    } catch (error) {
        const message =
            error.response.data.message || error.response.data || error.response
        return thunkAPI.rejectWithValue(message)
    }
})

//create car post 
export const createCarPost = createAsyncThunk('products/createCarPost', async (carData, thunkAPI) => {
    try {
        return await productService.createCarPost(carData)
    } catch (error) {
        const message =
            error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// single blog post 
export const getSinglePosts = createAsyncThunk('products/getSinglePosts', async (id, thunkAPI) => {
    try {
        return await productService.getSinglePosts(id)
    } catch (error) {
        const message =
            error.response.data.message || error.response.data || error.response
        return thunkAPI.rejectWithValue(message)
    }
})

//update my workshop 
export const makeBid = createAsyncThunk('product/makeBid', async (values, thunkAPI) => {
    try {
        console.log(values, "thunk")
        return await productService.makeBid(values)
    } catch (error) {
        const message =
            error.response.data.message || error.response.data || error.response
        return thunkAPI.rejectWithValue(message)
    }
})

// single blog post 
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, thunkAPI) => {
    try {
        return await productService.deleteProduct(id)
    } catch (error) {
        const message =
            error.response.data.message || error.response.data || error.response
        return thunkAPI.rejectWithValue(message)
    }
})