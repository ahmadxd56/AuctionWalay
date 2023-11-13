
import React, { useEffect, useState } from 'react';
import "./ProductDetail.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProducts, getSinglePosts, makeBid } from '../../product/product.thunk';
import Footer from '../../components/Footer';
// import { reset } from '../../product/product.slice';


const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [biddingPrice, setBiddingPrice] = useState('');

    const { isLoading, isError, isSuccess, message, product, products } = useSelector((state) => state.products)
    const { user } = useSelector((state) => state.auth)

    const relatedPosts = products.filter((relatedProduct) => relatedProduct?.location === product?.location);

    useEffect(() => {
        dispatch(getSinglePosts(id));
        dispatch(getAllProducts());

    }, [dispatch, id])


    useEffect(() => {
        if (isError) {
            alert(message)
        }
    }, [isError])

    const handleBidAmountChange = (e) => {
        setBiddingPrice(e.target.value);
    };

    const handleBidSubmit = async (e) => {
        e.preventDefault();
        console.log('Bid submitted:', biddingPrice);
        const bidData = {
            biddingPrice,
            id
        };
        try {
            await dispatch(makeBid(bidData));
            dispatch(getSinglePosts(id));

        } catch (error) {

        }
    };

    const isOwner = product?.user === user?._id; // Assuming you have the loggedInUserId in your state or from authentication

    const handleDelete = async () => {
        await dispatch(deleteProduct(id))
        navigate('/auctions')
    }

    return (
        <div>
            {!isLoading && product &&
                <div className="product-container">
                    <div className="product-image">
                        <img src={product?.imageURL} alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">{product?.name}</div>
                        <div className="product-info">
                            <p><strong>Model:</strong> {product?.model}</p>
                            <p><strong>Price:</strong> {product?.price}</p>
                            <p><strong>Location:</strong> {product?.location}</p>
                            <p><strong>Bid amount:</strong> <span className='' style={{ color: 'greenyellow' }}>{product?.biddingPrice}</span> <p>Bid By: <strong style={{ color: 'greenyellow' }}>{product?.updatedBy}</strong></p></p>
                        </div>
                        <div className="product-description">
                            <p><strong>Description:</strong><br></br>{product?.description}</p>
                        </div>

                        <div className='py-5 flex flex-col gap-4 text-white'>
                            <form className='' onSubmit={handleBidSubmit}>
                                {
                                    !isOwner && !product?.available && (
                                        <div className='flex flex-col'>
                                            <h2>Place Your Bid</h2>
                                            <label htmlFor="bidAmount">Bid Amount:</label>
                                            <input
                                                style={{ color: 'black' }}
                                                type="number"
                                                id="biddingPrice"
                                                name='biddingPrice'
                                                value={biddingPrice}
                                                onChange={handleBidAmountChange}
                                                required
                                            />
                                        </div>
                                    )
                                }

                                {
                                    !isOwner && !product?.available ? (
                                        <button type='submit' className='px-4 py-2 text-white font-semibold bg-green-600'>
                                            Make Bid
                                        </button>
                                    ) : (
                                        <p style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '2.5rem', textAlign: 'center' }}>
                                            {product?.available ? 'UnAvailable' : ''}
                                        </p>
                                    )
                                }
                                {isOwner && <button onClick={() => navigate(`/bids/${id}`)} className='px-4 py-2 text-white font-semibold bg-blue-600 mt-2'>See All Bids</button>}
                                {isOwner && <button onClick={handleDelete} className='px-4 py-2 text-white font-semibold bg-red-600 mt-2'>Delete post</button>}

                            </form>

                        </div>
                    </div>
                </div>
            }

            <div className="related-posts">
                <h2>Related Auctions</h2>
                <div className="cards-section">
                    {relatedPosts.map((relatedProduct) => (
                        <div key={relatedProduct?._id} className="card">
                            <img src={relatedProduct?.imageURL} alt={`Card ${relatedProduct?._id} Image`} />
                            <div className="card-title">{relatedProduct?.name}</div>
                            <div className="card-description">{relatedProduct?.description}</div>
                            <Link to={`/product/${relatedProduct?._id}`}><button className="card-button">View Details</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        <Footer />
        </div>
    );
}

export default ProductDetail;
