import axios from "axios";

const API_URL = 'http://localhost:4000/api/v1/'


//create post
const createCarPost = async (carData) => {
    const response = await axios.post(API_URL + 'product/new', carData, { withCredentials: true })
    return response.data
}

//get all blog posts
const getAllProducts = async () => {
    const response = await axios.get(API_URL + 'products')
    return response.data
}

//get single  post
const getSinglePosts = async (id) => {
    const response = await axios.get(API_URL + `product/${id}`, { withCredentials: true })
    return response.data
}

//make bid
const makeBid = async (values) => {
    console.log(values, "servceeeeeeeee")
    const response = await axios.patch(API_URL + `product/update-bidding/${values.id}`, values, { withCredentials: true })
    return response.data
}

//delete product
const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + `product/${id}`, { withCredentials: true })
    return response.data
}


const blogService = {
    getAllProducts,
    createCarPost,
    getSinglePosts,
    makeBid,
    deleteProduct
}
export default blogService