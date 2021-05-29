import React from 'react'
import Data from "./Data";
import "./style.scss"
import {HiOutlineShoppingCart} from 'react-icons/hi'
import SofaCollection from '../SofaCollection'

const NewArrivals = () => {

  return (
    <div className="new__arrivals ">
      <div className="container">
        <div className="heading d-flex justify-content-center">
          <h2>New Arrivals</h2>
        </div>

        <div className="products py-5">
          <div className="row">
            {Data.map((prd) => (
              <div key={prd.id} className="cart col-md-3 col-sm-4">
                <div className="img__continer ">
                  <img src={prd.img} alt={prd.title} />
                </div>
                <div className="add__cart">
                  <button type="button">
                    <HiOutlineShoppingCart className="icon" />
                    <p>Add To Cart</p>
                  </button>
                </div>
                <div className="cart__content text-center">
                  <h4>{prd.title}</h4>
                  <p>${prd.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SofaCollection />
    </div>
  );
}

export default NewArrivals
