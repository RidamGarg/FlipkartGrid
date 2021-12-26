import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import { TextField } from '@material-ui/core/';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { logout } from '../actions/user';

import styles from '../stylesheets/styles.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }
  onTextChange = (e) => {
    if (!e.target.value) {
      if (this.props.getProduct) this.props.getProduct();
    } else {
      this.setState({ product: e.target.value });
    }
  };
  onClickLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { isAdmin, isLoggedIn } = this.props.authUser;
    let { getProduct } = this.props;
    if (!getProduct) getProduct = () => console.log('products');
    return (
      <div className="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark ProductsNavbar">
          <Link class="navbar-brand" to="/">
            <HomeIcon />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse navbar-dark"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/products">
                  {' '}
                  Top Products <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="d-flex align-items-center">
                <TextField
                  id="standard-basic"
                  class="ml-2"
                  // variant="outlined"
                  onChange={this.onTextChange}
                  style={{ backgroundColor: 'white' }}
                />
              </li>
              <li class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm ml-1"
                  onClick={() => getProduct(this.state.product)}
                >
                  <SearchIcon />
                </button>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  style={{ textDecoration: 'none' }}
                  class="nav-link"
                  to="/user/cart"
                >
                  <ShoppingCartOutlinedIcon />
                </Link>
              </li>
            </ul>
            {!isLoggedIn && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/user/auth" class="nav-link">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/user/auth" class="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && isAdmin && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/admin/info" class="nav-link">
                    <i class="fas fa-user"></i>
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && isAdmin && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/add/product" class="nav-link">
                    Add Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.onClickLogout} class="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/user/orders" class="nav-link">
                    My Orders
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && !isAdmin && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/admin/signup" class="nav-link">
                    Sell
                  </Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.onClickLogout} class="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStateToProps)(Navbar);
