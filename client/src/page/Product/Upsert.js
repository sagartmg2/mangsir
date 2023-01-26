import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Upsert() {

  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    in_stock: "",
    description: ""
  });

  useEffect(() => {
    if (id) {

      axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
        .then(res => {
          setProduct(res.data.data)
        })
        .catch(err => {

        })
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    let data = {
      "name": e.target.name.value,
      "price": e.target.price.value,
      "description": e.target.description.value,
    }
    axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}products`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })

  }

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,

    })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Name *</label>
          <input type="text" class="form-control" name='name' value={product.name} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Price *</label>
          <input type="number" min={0} class="form-control" name='price' value={product.price} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">In Stock</label>
          <input type="number" min={0} class="form-control" name='in_stock' value={product.in_stock} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Deescription</label>
          <textarea rows={5} type="number" name='description' class="form-control" value={product.description} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Categories <button> addCategory</button></label>
          <input class="form-control" />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Brands <button> add brand</button></label>
          <input class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
