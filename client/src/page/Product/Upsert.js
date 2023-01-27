import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Upsert() {

  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    in_stock: "",
    description: "",
    categories: [""]
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

    let { name, price, description, categories, images } = product

    // let data = {
    //   name, price, description, categories
    // }

    let form_data = new FormData()
    form_data.append("name", name)
    form_data.append("price", price)
    form_data.append("description", description)

    categories?.forEach(category => {
      form_data.append("categories[]", category)
    })

    if (images) {

      let temp = [...images]

      temp.forEach(image => {
        form_data.append("images", image)
      })
    }

    let method = id ? "PUT" : "POST"
    let url = id ? `${process.env.REACT_APP_SERVER_DOMAIN}products/${id}` : `${process.env.REACT_APP_SERVER_DOMAIN}products`
    // axios.post()
    axios({
      method: method,
      url: url,
      data: form_data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      setProduct({})

    })
      .catch(err => { })

  }

  function handleChange(e, index) {

    if (e.target.name == "categories") {

      let temp = [...product.categories]
      temp[index] = e.target.value

      setProduct({
        ...product,
        [e.target.name]: temp

      })

    } else if (e.target.name == "images") {

      let temp = [...product.images, ...e.target.files]

      setProduct({
        ...product,
        [e.target.name]: temp
      })

    } else {

      setProduct({
        ...product,
        [e.target.name]: e.target.value,

      })
    }
  }

  function addCategory() {
    let temp = []

    if (product.categories) {
      temp = [...product?.categories]
    }

    temp.push("")
    setProduct({ ...product, categories: temp })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Name *</label>
          <input type="text" class="form-control" name='name' value={product.name || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Price *</label>
          <input type="number" min={0} class="form-control" name='price' value={product.price || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">In Stock</label>
          <input type="number" min={0} class="form-control" name='in_stock' value={product.in_stock || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Deescription</label>
          <textarea rows={5} type="number" name='description' class="form-control" value={product.description || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Categories <button type='button' onClick={addCategory}> addCategory</button></label>
          {
            product.categories?.map((category, index) => {
              return <input value={category} name="categories" class="form-control mb-2" onChange={(e) => handleChange(e, index)} />
            })
          }
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Images</label>
          <input type="file" class="form-control" name='images' multiple onChange={handleChange} />
          <hr />
          {
            product.images?.map(image => {
              let src = typeof (image) === "string" ? image : URL.createObjectURL(image)

              return <img src={src} height="150" width="150" />
            })
          }

        </div>
        {/* <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Brands <button type='button'> add brand</button></label>
          <input class="form-control" />
        </div> */}

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
