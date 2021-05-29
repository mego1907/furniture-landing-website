import React from 'react'
import img1 from '../../assets/images/clients/c1.png'
import img2 from '../../assets/images/clients/c2.png'
import img3 from '../../assets/images/clients/c3.png'
import img4 from '../../assets/images/clients/c4.png'


const Clinets = () => {

  return (
    <div className="clients py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 py-4 d-flex justify-content-center">
            <img src={img1} alt="Client Img" />
          </div>
          <div className="col-sm-3 py-4 d-flex justify-content-center">
            <img src={img2} alt="Client Img" />
          </div>
          <div className="col-sm-3 py-4 d-flex justify-content-center">
            <img src={img3} alt="Client Img" />
          </div>
          <div className="col-sm-3 py-4 d-flex justify-content-center">
            <img src={img4} alt="Client Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clinets
