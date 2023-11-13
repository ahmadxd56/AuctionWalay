import { createSlice } from "@reduxjs/toolkit";
import { createCarPost, deleteProduct, getAllProducts, getSinglePosts, makeBid } from "./product.thunk";
import initialProductState from "./product.initialstate";

const productSlice = createSlice({
    name: "products",
    initialState: initialProductState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.products = []
            state.product = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCarPost.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false

            })
            .addCase(createCarPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
            })
            .addCase(createCarPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload.error
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
                state.products = action.payload.payload.products
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload.error
                state.blogPosts = []
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(getSinglePosts.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(getSinglePosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = action.payload.message
                state.product = action.payload.payload.product
            })
            .addCase(getSinglePosts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload.error
                state.blogPost = null
            })
            .addCase(makeBid.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(makeBid.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = action.payload.message
            })
            .addCase(makeBid.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload.error
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload.error
            })
    }
})

export const { reset } = productSlice.actions

export default productSlice.reducer