import React from 'react'
import "./style.scss"
import popularImg1 from '../../assets/images/popular-products/p1.png'
import popularImg2 from '../../assets/images/popular-products/p2.png'
import popularImg3 from '../../assets/images/popular-products/p3.png'

const PopularProducts = () => {
  return (
    <div className="popular__products py-5 my-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 popular__left">
            <img src={popularImg1} alt="" className="d-flex m-auto" />
            <div className="content text-center pt-4">
              <h4>Arm Chair</h4>
              <p>
                Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                aut
              </p>
            </div>
          </div>
          <div className="col-lg-6 popular__center">
            <div className="row">
              <div className="col-md-4">
                <img src={popularImg2} alt="" />
              </div>
              <div className="col-md-8">
                <h5>Latest Designed Stool and Chair</h5>
                <p>
                  Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit
                  Voluptatem Accusantium Doloret Mque Laudantium, Totam Rem
                  Aperiam.
                </p>
                <h6 className="sales">
                  Sales Start from <span> $99.00</span>
                </h6>
                <button type="button" className="btn-cart my-3">
                  Discover More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={popularImg3} alt="" className="d-flex m-auto" />
            <div className="content text-center pt-4">
              <h4>Hanging Lamp</h4>
              <p>
                Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                aut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts
