import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import NOImage from "../asset/images/no-image.jpg"
import BuyerComponent from '../component/BuyerComponent';
import RoleComponent from '../component/RoleComponent';
import { setCart } from '../redux/Slice/CartSlice';
/* 
    import -> ES6 module
    require -> common JS
*/



const Home = ({ search_term, user }) => {

    const dispatch = useDispatch();

    const redux_user = useSelector(store => store.user.value)

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const navigate = useNavigate()

    const [meta, setmeta] = useState({
        page: 1,
        per_page: 25,
        total: 0
    });


    // const [serach_term, setSearchTerm] = useState("");

    /*  
        database operations
            CRUD
                ceate
                read
                update
                delete
        
            HTTP methods
                GET
                POST
                PUT / PATCH
                DELETE
    
    */

    const fetchProducts = () => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products?search_term=${search_term}&page=${meta.page} `)
            .then(res => {
                console.log(res);
                setisLoading(false)
                setProducts(res.data.data[0].data)
                setmeta(res.data.data[0].metadata[0])
                // console.log("meta_data", res.data.data[0].metadata[0])
                // // setmeta({ total: 202, page: 1, per_page: 25 })

            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [search_term, meta.page]);

    function addToCart(e) {
        e.preventDefault()

        if (!redux_user) {
            navigate("/login")
        }
        
        dispatch(setCart())
        console.log("add to cart")
    }

    const editProduct = (e, id) => {
        e.preventDefault();
        console.log("edit product");
        navigate("/products/edit/" + id)

    }

    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}products/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(() => {
                fetchProducts()
            })
            .catch(() => {

            })
    }

    return (
        <div className='container'>

            <div className='row'>
                {
                    isLoading
                    &&
                    <h1>loading.. </h1>

                }
                {/* <input value={serach_term} onChange={(e) =>{setSearchTerm(e.target.value)}}/> */}
                {
                    products.map(product => {
                        return <div className='p-2 col-md-3' key={product._id}>
                            <Link to={`/products/${product._id}`} style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>
                                <div className="card"  >
                                    {/* <img src={require("../asset/images/no-image.jpg")} className="card-img-top" alt="..." /> */}
                                    {/* <img src={NOImage} className="card-img-top" alt="..." /> */}
                                    <img src={`${product.images[0] || require("../asset/images/no-image.jpg")}`}
                                        className="card-img-top" alt="..."
                                        style={{
                                            height: "180px",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price} </p>
                                        {/* {
                                            user?.role == "buyer"
                                            &&
                                        } */}
                                        <BuyerComponent user={user}>
                                            <button className='btn btn-secondary' onClick={addToCart}>Add To Cart</button>
                                        </BuyerComponent>
                                        <RoleComponent role="seller">
                                            <>
                                                {/* <Link to="/products/edit/id">to ID </Link> */}
                                                <button className='btn btn-secondary' onClick={(e) => editProduct(e, product._id)}>Edit</button>
                                                <button className='btn btn-secondary mx-3' onClick={(e) => deleteProduct(e, product._id)}>Delete</button>
                                            </>
                                        </RoleComponent>


                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
                <div className='pagination-wrapper'>
                    <
                        ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={
                            (e) => {
                                setmeta({ ...meta, page: (e.selected + 1) })
                            }
                        }
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(meta.total / meta.per_page)}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;
