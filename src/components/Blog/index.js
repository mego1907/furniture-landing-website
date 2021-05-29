import React from 'react'
import Clinets from '../Clients'
import Data from './Data'
import "./style.scss"

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="heading d-flex justify-content-center">
          <h2>Latest Blog</h2>
        </div>

        <div className="row py-5 my-3">
          {Data.map((blog) => (
            <div key={blog.id} className="col-sm-4">
              <div className="img__container">
                <img src={blog.img} alt={blog.title} width="100%" />
              </div>
              <div className="content py-4">
                <h3 className="title">
                  {blog.title}
                </h3>
                <p className="auther">By {blog.auther}</p>
                <p className="desc">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Clinets />
    </div>
  );
}

export default Blog
