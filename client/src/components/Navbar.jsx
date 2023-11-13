import React, { useEffect } from 'react';
import '../style/Navbar.css'; // Create a separate CSS file for Navbar styles
import loc from '../resources/Vector.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../auth/auth.thunk';
import { reset } from '../auth/auth.slice';


const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, logoutSuccess } = useSelector((state) => state.auth)

    const logoutHandle = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (logoutSuccess) {
            dispatch(reset())
            navigate('/')
        }
    }, [logoutSuccess])
    return (
        <div className="navbar">
            {/* Left side - Logo */}
            <div className="logo">
                <Link to='/'><img src="https://i.ibb.co/0MLp4j6/Untitled-500-250-px-300-141-px-2-3.png" alt="Logo" /></Link>
            </div>

            {/* Middle - Buttons */}
            <div className="buttons">
                <Link to='/'><button>HOW IT WORKS</button></Link>
                <Link to='/sell-now' className='secondaryBtn'>Sell Now</Link>
                <Link to='/auctions' className='secondaryBtn'>Buy Now</Link>
                <Link to='/sign-up' className='secondaryBtn'>Sign Up</Link>
            </div>

            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://i.ibb.co/wRDDqFJ/icons8-user-50.png" rounded />
                }
            >
                {
                    user ? (
                        <>
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.name}</span>
                                <span className="block truncate text-sm font-medium">{user?.email}</span>

                            </Dropdown.Header>
                                <Dropdown.Item>
                            <Link to={'/profile'}>
                                    Profile

                            </Link>
                                </Dropdown.Item>
                            <Dropdown.Divider />

                            <Dropdown.Item onClick={logoutHandle} className='bg-red-400  '>Sign out</Dropdown.Item>
                        </>
                    ) : (
                        <Dropdown.Header>
                            <Link to={'/sign-in'}>
                                <span className="block text-sm" >{"Login"}</span>
                            </Link>

                        </Dropdown.Header>
                    )
                }

            </Dropdown>


            {/* Right side */}
            <div className="country">
                <span className='h3'>Pakistan</span>
                <img src={loc} className='loc' alt="Logo" />
            </div>
        </div>
    );
};

export default Navbar;
