import axios from 'axios';
import { immerable } from 'immer';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/Slice/CartSlice';
export default function Cart() {

  const cart_items = useSelector((store) => store.cart.value)
  console.log({ cart_items });
  let dispatch = useDispatch()


  function placeOrder() {
    let data = {
      products: cart_items
    }
    axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}orders`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        dispatch(clearCart())
      })
      .catch(err => {

      })
  }

  return (
    <div className='container'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          {
            cart_items.map(item => {
              return <tr>
                <th scope="row">1</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            })
          }

        </tbody>

      </table>
      <button className='btn btn-primary'
        onClick={placeOrder}
      >place order</button>
    </div>
  )
}
