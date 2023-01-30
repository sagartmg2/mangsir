import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BuyerComponent from '../../component/BuyerComponent';
import { addToCart } from '../../redux/Slice/CartSlice';

export default function ProductDetail({ user }) {
    let dispatch = useDispatch()

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
            .then(res => {
                setProduct(res.data.data)
            })
            .catch(err => {

            })
    }, []);

    return (
        <div className=' container row'>
            <div className='col-md-6'>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.picsum.photos/id/989/536/354.jpg?hmac=VxcXpy_SClu7tyi7VoEqlxnyZqgNcMYdWO8gB28XxZQ" class="d-block w-100" alt="..." />                        </div>
                        <div class="carousel-item">
                            <img src="https://i.picsum.photos/id/191/536/354.jpg?hmac=I9U8E-z9dk8hNScHfTUXH7gu53I-E61_tKZdlOnjxOQ" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='col-md-6'>
                <h2>{product.name}</h2>
                <h3>$ {product.price}</h3>
                <BuyerComponent user={user}>
                    <button className='btn btn-secondary' onClick={() => {
                        dispatch(addToCart(product))
                    }}>Add To Cart</button>
                </BuyerComponent>
                {/* {
                    user.role == "buyer"
                    &&
                    <button className='btn btn-secondary' onClick={() => { }}>Add To Cart</button>

                } */}


            </div>


        </div>
    )
}
