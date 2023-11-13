import React, { useEffect } from 'react';
import '../style/SignUp.css'
import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'
import { useFormik } from 'formik';
import * as yup from "yup";
import { register } from '../auth/auth.thunk';
import { useDispatch, useSelector } from 'react-redux';


const schema = yup.object({
    name: yup.string().required('name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    city: yup.string().required('city is required'),
    cnic: yup.string().min(13).max(13).required('cnic is required'),
    phoneNumber: yup.string().min(11).max(11).required('phone number is required'),

}).required();


const App = () => {

    const dispatch = useDispatch()
    const initialValues = {
        name: "",
        email: "",
        password: "",
        city: "",
        cnic: "",
        phoneNumber: ""
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {
                console.log(values)

                // // Register the user with the updated form data
                await dispatch(register(values));
                alert("Your Account Has Been Created - Start Auctioning Now!")
            },
        });


    const { user, isLoading, isSuccess, } = useSelector((state) => state.auth)


    return (
        <div className="form" style={{ backgroundImage: `url(${Left})` }}>
            <div className="rightSide">
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please enter the following details to get yourself registered with us.</p>

                    <form onSubmit={handleSubmit} className='signup-form' id="registration" >
                        <label htmlFor="name">Full Name</label>
                        <input
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Full Name" />
                        {errors.name && touched.name ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem', whiteSpace: 'normal' }}>{errors.name}</p>
                        ) : null}
                        <label htmlFor="password">Choose Your Password</label>
                        <input
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Password..." />
                        {errors.password && touched.password ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem' }}>{errors.password}</p>
                        ) : null}

                        <label htmlFor="email">Choose Your Email</label>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="youremail@xyz.com" />
                        {errors.email && touched.email ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem' }}>{errors.email}</p>
                        ) : null}

                        <label htmlFor="phoneNumber">Enter Your Phone Number</label>
                        <input
                            name='phoneNumber'
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="+92 XXX-XXXXXXX"
                            type="text" />
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem' }}>{errors.phoneNumber}</p>
                        ) : null}

                        <label htmlFor="city">City</label>
                        <select
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                        >
                            <option value="" disabled selected hidden>Choose an Option</option>
                            <option value="lahore">Lahore</option>
                            <option value="khirachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                        </select>
                        {errors.city && touched.city ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem' }}>{errors.city}</p>
                        ) : null}

                        <label htmlFor="cnic">CNIC</label>
                        <input
                            name='cnic'
                            value={values.cnic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="35202-XXXXXXX-X" />
                        {errors.cnic && touched.cnic ? (
                            <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1.5rem' }}>{errors.cnic}</p>
                        ) : null}

                        <button type="submit" className='bg-blu-400 relative'>Sign Up</button>
                        <div className='divisor'>
                            <img src="https://i.ibb.co/s6xPV2w/divisor.png" alt="Divisor" />
                        </div>
                        <Link to="/sign-in">
                            <button className='px-4 py-2 text-white font-semibold bg-blue-600 mt-2'>Login to your Account</button>
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

export default App;