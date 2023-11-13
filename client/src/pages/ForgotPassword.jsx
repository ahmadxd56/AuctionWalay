import React from 'react'
import '../style/ForgotPassword.css'
import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../auth/auth.thunk';

const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
}).required();

const Forgot = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, message, isSuccess } = useSelector((state) => state.auth)
    const initialValues = {
        email: "",
    };
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: (values, action) => {
                dispatch(forgotPassword(values))
                action.resetForm();
            },
        });
    return (
        <div className="form-forget" style={{ backgroundImage: `url(${Left})` }}>
            <div
                className="top">
                <img src="https://i.ibb.co/TR32z9D/3-1-1.png" alt="AuctionWalay" />
            </div>
            <div className="center-form">
                <div className='container-center'>
                    <Link to="/sign-in">
                        <button className='arrow-button'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Big Arrows">
                                    <path id="Vector 24" d="M11.8125 3.375L6.89461 8.29289C6.50408 8.68342 6.50408 9.31658 6.89461 9.70711L11.8125 14.625" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </g>
                            </svg>
                        </button>
                    </Link>
                    <h1>Forget password</h1>

                    <form className='forget' id="forgot" onSubmit={handleSubmit}>

                        <label htmlFor="email">Enter Your Email</label>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="example@gmail.com" type="email" />
                        {errors.email && touched.email ? (
                            <p className="text-red-600 animate-pulse">{errors.email}</p>
                        ) : null}

                        <button type="submit">send link 🔗</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgot
