import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePosts } from '../../product/product.thunk';

const BidsDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message, product } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getSinglePosts(id));
    }, [dispatch, id])

    return (
        <div style={{ marginTop: '40px' }}>
            <div class="section-heading">
                 <h1>Active <span>Bids</span></h1>
            </div>
            <table
                style={{
                    width: '80%',
                    margin: '20px auto',
                    borderCollapse: 'collapse',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                >
                <thead>
                    <tr style={{ background: '#009CFF', color: 'white', textAlign: 'left', borderRadius: '8px 8px 0 0' }}>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>User ID</th>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>Username</th>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>Contact No</th>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>User Email</th>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>Bid Amount</th>
                    <th style={{ ...tableHeaderStyle, padding: '10px' }}>Car Model</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.bids &&
                    product?.bids?.map((bid, index) => (
                        <tr key={index} style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '10px' }}>{bid?.user}</td>
                        <td style={{ padding: '10px' }}>{bid?.userName}</td>
                        <td style={{ padding: '10px' }}>{bid?.userContact}</td>
                        <td style={{ padding: '10px' }}>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${bid?.email}`} target="_blank" style={{ color: 'black' }}>
                            {bid?.email}
                            </a>
                        </td>
                        <td style={{ padding: '10px' }}>{bid?.bidAmount}</td>
                        <td style={{ padding: '10px', color: 'black' }}>{product?.model}</td>
                        </tr>
                    ))}
                </tbody>
                </table>;


        </div >
    );
};

// Styles
const tableHeaderStyle = {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
};

const tableRowStyle = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
};

export default BidsDetails;
