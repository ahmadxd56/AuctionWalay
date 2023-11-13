import React, { useEffect } from 'react'
import '../style/Reset.css'
//import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../auth/auth.thunk';
import { reset } from '../auth/auth.slice';

const schema = yup.object({
    newPassword: yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
}).required();


const Reset = () => {

    const navigate = useNavigate()
    const { token } = useParams();
    const dispatch = useDispatch()
    const { isLoading, isError, message, isSuccess } = useSelector((state) => state.auth)

    const initialValues = {
        newPassword: "",
        confirmPassword: "",
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                // console.log(values)
                const { newPassword, confirmPassword } = values;
                dispatch(resetPassword({ newPassword, confirmPassword, token }))
                action.resetForm();
            },
        });

    useEffect(() => {
        if (isError) {
            alert(message);
            dispatch(reset())
        }
        if (isSuccess) {
            alert(message)
            dispatch(reset())
            navigate("/sign-in")
        }

    }, [isError, isSuccess])

    return (
        <div className="form-reset" style={{ backgroundImage: `url(${Left})` }}>
            <div className="center-form-wd-tp">
                <div className='container-center-diff-pad'>
                    <h1>Reset Password</h1>

                    <form className='reset' id="forgot" onSubmit={handleSubmit}>

                        <label htmlFor="password">Enter Your New Password</label>
                        <input
                            type="password"
                            name='newPassword'
                            id='newPassword'
                            value={values.newPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="************" />
                        {errors.newPassword && touched.newPassword ? (
                            <p className="text-red-600 animate-pulse">{errors.newPassword}</p>
                        ) : null}

                        <label htmlFor="password">Confirm Your  Password</label>
                        <input
                            type="password"
                            name='confirmPassword'
                            id='confirmPassword'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="************" />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <p className="text-red-600 animate-pulse">{errors.confirmPassword}</p>
                        ) : null}

                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset
