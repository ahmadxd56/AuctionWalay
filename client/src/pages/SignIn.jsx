import React, { useEffect } from 'react'
import '../style/SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../auth/auth.thunk';
import { reset } from '../auth/auth.slice';

const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();


const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message, logoutSuccess } = useSelector((state) => state.auth)

    const initialValues = {
        email: "",
        password: "",
    };
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: (values, action) => {
                dispatch(login(values))
                action.resetForm();
            },
        });


    useEffect(() => {
        if (isError) {
            dispatch(reset())
        }
        if (isSuccess) {
            navigate('/')
        }
    }, [isError, isSuccess])
    return (
        <div className="form" style={{ backgroundImage: `url(${Left})` }}>
            <div className="rightSide">
                <div className='container'>
                    <h1>Login</h1>
                    <p>Please enter your name and password.</p>

                    <form className='login-form' id="login" onSubmit={handleSubmit}>

                        <label htmlFor="email">Choose Your Email</label>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email" id='email' placeholder="youremail@xyz.com" />
                        {errors.email && touched.email ? (
                            <p className="text-red-600 animate-pulse">{errors.email}</p>
                        ) : null}

                        <label htmlFor="password">Enter your password</label>
                        <input name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='password' placeholder="********" type="password" />
                        {errors.email && touched.email ? (
                            <p className="text-red-600 animate-pulse">{errors.email}</p>
                        ) : null}

                        <button type="submit" className='bg-blu-400'>Login</button>

                        <div className='divisor'>
                            <a href='/forgot-password'>Forgot password?</a>
                            <img src="https://i.ibb.co/s6xPV2w/divisor.png" alt="Divisor" />
                        </div>
                        <Link to="/sign-up">
                            <button className='bg-blu-400'>Sign Up</button>
                        </Link>
                    </form>
                </div>
            </div>
            <div
                className="leftSide">
                <img src="https://i.ibb.co/xhHvdrk/logo-Forms.png" alt="AuctionWalay" />
            </div>
        </div>
    );
};

export default SignIn
