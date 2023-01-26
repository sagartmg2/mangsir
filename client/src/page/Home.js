import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NOImage from "../asset/images/no-image.jpg"
import BuyerComponent from '../component/BuyerComponent';
import RoleComponent from '../component/RoleComponent';
/* 
    import -> ES6 module
    require -> common JS
*/


const Home = ({ search_term, user }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const navigate = useNavigate()


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

    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products?search_term=${search_term}`)
            .then(res => {
                console.log(res);
                setisLoading(false)
                setProducts(res.data.data[0].data)

            }).catch(err => {

            })
    }, [search_term]);

    function addToCart() {
        if (!user) {
            navigate("/login")
        }
        console.log("add to cart")
    }

    const editProduct = (e, id) => {
        e.preventDefault();
        console.log("edit product");
        navigate("/products/edit/" + id)

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
                                                <button className='btn btn-secondary mx-3' onClick={addToCart}>Delete</button>
                                            </>
                                        </RoleComponent>


                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Home;
