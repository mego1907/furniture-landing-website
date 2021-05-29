import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Data from './Data';
import './style.scss'

const FeaturedProducts = () => {
  return (
    <div className="featured__products my-5 py-5">
      <div className="container">
        <div className="heading d-flex justify-content-center pb-5">
          <h2>Featured Products</h2>
        </div>

        <div className="row">
          {Data.map((item) => (
            <div key={item.id} className="col-sm-3 my-3">
              <img src={item.img} alt="" width="100%" />
              <div className="content">
                <ul className="stars">
                  <li>
                    <AiFillStar className="icon" />
                  </li>
                  <li>
                    <AiFillStar className="icon" />
                  </li>
                  <li>
                    <AiFillStar className="icon" />
                  </li>
                  <li>
                    <AiFillStar className="icon" />
                  </li>
                  <li>
                    <AiFillStar className="icon disapled" />
                  </li>
                </ul>
                <h3>{item.title}</h3>
                <h5 className="price">${item.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts
