import React, { useState } from 'react'
import '../style/SignIn.css'
import { Link,useNavigate } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'
import users from './users'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthInput from '../components/mui/mui/AuthInput';
import { Box } from '@mui/material'
import Alert from '@mui/material/Alert';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';


const SignIn = () => {
    const [error, setError] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log(values)
            console.log(users)
            setError(false)
            let loaded_user = null
            for (let i = 0; i < users.length; i++) {
                if (users[i]['username'] === values.username && users[i]['password'] === values.password) {
                    loaded_user = users[i]
                    console.log(users[i])
                }
            }
            if (loaded_user) {
                localStorage.setItem('login', 'yes')
                navigate('/auctions')
            }
            else {
                localStorage.setItem('login', 'no')
                setError(true)
            }
        },
    })

    const navigate = useNavigate()

    return (
        <div className="form" style={{ backgroundImage: `url(${Left})`}}>
            <div className="rightSide">
                <div className='container'>
                <h1>Login</h1>
                <p>Please enter your name and password.</p>

                <form className="login-form" onSubmit={formik.handleSubmit}>

                    <label className="input-label">Username:</label>
                    <AuthInput
                        variant="outlined"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <Alert severity="error">{formik.errors.username}</Alert>
                    )}
                    <label htmlFor="password">Enter your password</label>
                    <AuthInput
                    type="password"
                    icon={<HttpsRoundedIcon />}
                    variant="outlined"
                    {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <Alert severity="error">{formik.errors.password}</Alert>
                    )}
                    {error && <Alert severity="error">Username or password is incorrect.</Alert>}
                    <button type="submit">Login</button>
                    
                    <div className='divisor'>
                    <a href='/forgot-password'>Forgot password?</a>
                        <img src="https://i.ibb.co/s6xPV2w/divisor.png" alt="Divisor" />
                    </div>
                    <Link to="/sign-up"> 
                    <button className='btn-2'>Sign Up</button>
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



