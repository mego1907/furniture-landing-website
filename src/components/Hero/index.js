import React from 'react'
import './style.scss'
import heroImg from '../../assets/images/slider/slider2.png'
import {FiPlusCircle} from 'react-icons/fi' 

const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h6>Great Design Collection</h6>
            <h2>Mapple Wood Accent Chair</h2>
            <p className="my-4">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
              Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
              Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
              Aliquip.
            </p>
            <div className="packages-price">
              <div className="price d-flex">
                <p>$ 199.00 </p>
                <del>$ 299.00</del>
              </div>
            </div>
            <div className="btns">
              <button
                type="button"
                className="btn bg-dark text-light add__hero__btn rounded-0"
              >
                <FiPlusCircle className="icon" /> Add To Cart
              </button>
              <button type="button" className="btn more__btn">
                More Info
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img src={heroImg} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero
