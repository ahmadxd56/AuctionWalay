import React, { useEffect, useState } from 'react';
import '../style/SellNow.css';
import Left from '../resources/native-bg-plain.png';
import { useFormik } from 'formik';
import * as yup from "yup";
import { reset } from '../product/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { createCarPost } from '../product/product.thunk';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const schema = yup.object({
    name: yup.string().required('name is required'),
    model: yup.string().required('model is required'),
    description: yup.string().min(10).required('descripton is required'),
    location: yup.string().required('location is required'),
    price: yup.number().typeError('price  must be a number').required('price is required'),
})

const SellNow = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const initialValues = {
        name: '',
        description: '',
        model: '',
        location: '',
        price: ''
    }
    const { isError, isSuccess, message } = useSelector((state) => state.products)



    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {

                try {
                    // Upload the image to Cloudinary
                    const formData = new FormData();
                    formData.append('file', image);
                    formData.append('upload_preset', 'present_images'); // Replace with your Cloudinary upload preset
                    const cloudinaryResponse = await axios.post(
                        'https://api.cloudinary.com/v1_1/dkqd4ylas/image/upload',
                        formData
                    );
                    const imageUrl = cloudinaryResponse.data.secure_url;
                    // Add the Cloudinary image URL to the form data
                    values.imageURL = imageUrl;
                    console.log(values)
                    dispatch(createCarPost(values))
                    if (isSuccess) {
                        navigate('/')
                    }
                    action.resetForm();

                } catch (error) {
                    alert('Image upload failed.');
                }

            },
        });

    useEffect(() => {
        if (isError) {
            dispatch(reset())
        }
    }, [isError])

    return (
        <div className="form-sell" style={{ backgroundImage: `url(${Left})` }}>
            <div className="center-form-wd-tp50">
                <div className='container-center-short-pad'>
                    <h1 className='standard-center-white'>Sell Your Car</h1>
                    <p className='standard-center-white'>Please enter your auction Details</p>

                    <form className='sell' id="sell-now" onSubmit={handleSubmit}>
                        <label htmlFor="avatar" className="custom-file-input">
                            <p> click to upload image</p>
                            {image && (
                                <img className="w-full h-full" src={URL.createObjectURL(image)} alt="Rounded avatar" />
                            )}

                        </label>
                        <input
                            type='file'
                            id='avatar'
                            name='avatar'
                            onChange={handleImageChange}
                        />

                        <label htmlFor="name">Enter your Car name</label>
                        <input
                            name='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            type="text" placeholder="enter car name"
                        />
                        {errors.name && touched.name ? (
                            <p className="text-red-600 animate-pulse">{errors.name}</p>
                        ) : null}

                        <label htmlFor="model">Enter your Car Model</label>
                        <input
                            name='model'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.model}
                            type="text"
                            placeholder="enter car model"
                        />
                        {errors.model && touched.model ? (
                            <p className="text-red-600 animate-pulse">{errors.model}</p>
                        ) : null}

                        <label htmlFor="description">Enter Car Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder="enter description"></textarea>
                        {errors.description && touched.description ? (
                            <p className="text-red-600 animate-pulse">{errors.description}</p>
                        ) : null}

                        <div className="row">
                            <div className="side-by-side">
                                <select
                                    name='location'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                >
                                    <option value="" disabled selected hidden>Choose a Location</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                    <option value="karachi">Karachi</option>
                                    <option value="rawalpindi">Rawalpindi</option>
                                    <option value="faisalabad">Faisalabad</option>
                                    <option value="Gujranwala">Gujranwala</option>
                                    <option value="Multan">Multan</option>
                                </select>
                            </div>
                            {errors.location && touched.location ? (
                                <p className="text-red-600 animate-pulse">{errors.location}</p>
                            ) : null}
                        </div>


                        <label htmlFor="price">Enter your Car Price</label>
                        <input
                            name='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price} type="number" placeholder="enter you car price" />
                        {errors.price && touched.price ? (
                            <p className="text-red-600 animate-pulse">{errors.price}</p>
                        ) : null}
                        <br></br>

                        <p className=''><span className='text-yellow-500'>DISCLAIMER</span> <br></br>
                            Your Ad will be Live and active till 10 days of receiving your first bid, if anyone wins the auction in our timeline, the token fee would be deducted from their side and our support agent will direct you to them.</p>

                        <button type="submit">START SELLING</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SellNow;
