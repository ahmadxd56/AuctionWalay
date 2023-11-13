import React, { useEffect } from 'react'
import '../style/Update.css'
//import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateProfile } from '../auth/auth.thunk';
import { reset } from '../auth/auth.slice';


const schema = yup.object({

    email: yup.string().email('Invalid email').required('Email is required'),
    city: yup.string().required('city is required'),
    phoneNumber: yup.string().min(11).max(11).required('phone number is required'),

}).required();

const Update = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, message, isUpdate, isSuccess } = useSelector((state) => state.auth)

    const initialValues = {
        email: user?.email,
        city: user?.city,
        phoneNumber: user?.phoneNumber
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: async (values, action) => {
                await dispatch(updateProfile(values))
                dispatch(loadUser())
                action.resetForm();

            },
        });


    useEffect(() => {

        if (isUpdate) {
            alert(message);
            navigate('/profile')
        }

    }, [isUpdate])


    return (
        <div className="form-update" style={{ backgroundImage: `url(${Left})` }}>
            <div className="center-form-wd-tp">
                <div className='container-center-diff-pad'>
                    <h1>Update Profile</h1>
                    <p>Only the options given below can be updated, for permanent account deletion contact Customer Support.</p>

                    <form onSubmit={handleSubmit} className='update' id="update-acc" >

                        <label htmlFor="email">Choose New Email</label>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="youremail@xyz.com" />
                        {errors.email && touched.email ? (
                            <p className=" " style={{ color: "red" }}>{errors.email}</p>
                        ) : null}

                        <label htmlFor="phoneNumber">Enter New Phone Number</label>
                        <input
                            name='phoneNumber'
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="+92 XXX-XXXXXXX" />
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <p className=" " style={{ color: "red" }}>{errors.phoneNumber}</p>
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
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                        </select>
                        {errors.city && touched.city ? (
                            <p className=" " style={{ color: "red" }}>{errors.city}</p>
                        ) : null}

                        <a href='/forgot-password'>Looking for Reset Password?</a>

                        <button type="submit">Update Info</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update
