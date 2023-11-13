import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../auth/auth.thunk';

const UserProfile = () => {


    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadUser())
    // }, [])


    const { user } = useSelector((state) => state.auth)


    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const profileContainerStyle = {
        textAlign: 'center',
        width: "80%",
        height: '60%',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
    };

    const labelStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '5px',
    };

    const infoStyle = {
        fontSize: '16px',
        marginBottom: '15px',
    };

    const buttonContainerStyle = {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#fff',
    };


    return (
        <>
            <h1>Profile Page</h1>
            <div style={containerStyle}>

                <div style={profileContainerStyle}>

                    <div>
                        <label style={labelStyle}>Username:</label>
                        <div style={infoStyle}>{user?.name}</div>

                        <label style={labelStyle}>Email:</label>
                        <div style={infoStyle}>{user?.email}</div>

                        <label style={labelStyle}>CNIC:</label>
                        <div style={infoStyle}>{user?.cnic}</div>

                        <label style={labelStyle}>Phone Number:</label>
                        <div style={infoStyle}>{user?.phoneNumber}</div>

                        <label style={labelStyle}>City:</label>
                        <div style={infoStyle}>{user?.city}</div>
                    </div>

                    <div style={buttonContainerStyle}>
                        <Link to="/" style={{ ...buttonStyle, backgroundColor: 'blue' }}>
                            Back to Home
                        </Link>
                        <Link to="/update" style={{ ...buttonStyle, backgroundColor: 'green' }}>
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default UserProfile;
