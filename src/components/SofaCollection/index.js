import React from 'react'
import "./style.scss"

const SofaCollection = () => {
  return (
    <div className="sofa__collection">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-shadow">unlimited dainning table collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="sofa__collection__price">
              <h6>
                strting from <span>$ 299</span>
              </h6>
            </div>
            <button type="button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SofaCollection
