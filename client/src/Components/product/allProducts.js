import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Product, Flash } from '../';

import styles from '../../stylesheets/styles.css';
import '../../stylesheets/allProducts.css';

class allProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    const res = await axios.get('/api/products');
    this.setState({ data: res.data });
  };
  render() {
    const { data } = this.state;
    if (data.length == 0) {
      return (
        <div className="d-flex justify-content-center align-items-center loadingPage">
          <div style={{ width: 150, height: 150 }}>
            <div className="loading"> </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <Flash />
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 carousel-img"
                src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 carousel-img"
                src="https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 carousel-img"
                src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-special-offer-sale-banner-template-design-with-colorful-design-isolated-on-png-image_5264798.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className=" justify-content-around  mt-3 d-flex" id="allProducts">
          {data.map(function (product) {
            return (
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none' }}
                // className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6 mb-5 d-grid float-start"
              >
                <Product product={product} key={product._id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default allProducts;
