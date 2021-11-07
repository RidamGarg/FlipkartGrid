import react from 'react';
import { Navbar, Flash } from '../index';
import '../../stylesheets/orders.css';

const data = [
  {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name: 'rhythm',
    price: '30',
    orderDate: '69 July 2069',
    status: 'On The Way',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name: 'bhatia',
    price: '50',
    orderDate: '30 June 2034',
    status: 'Delivered',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name: 'hello',
    price: '12',
    orderDate: '41 Aug 3067',
    status: 'Processing',
  },
];

function ParticularOrder(props) {
  const { order } = props;
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <img src={order.src} className="order-image" />
        </div>
        <div className="col-3">{order.name}</div>
        <div className="col-2">₹ {order.price} /-</div>
        <div className="col-2">{order.orderDate}</div>
        <div className="col-2">{order.status}</div>
      </div>
      <br />
    </div>
  );
}

function Orders() {
  return (
    <div className="orders">
     <Navbar />
     <h2>My Orders</h2>
      <div className="orders-div">
        <div className="row my-orders-head">
          <div className="col-3"></div>
          <div className="col-3">Product</div>
          <div className="col-2">Price</div>
          <div className="col-2">Order Date</div>
          <div className="col-2">Status</div>
        </div>
        <br />
        <br />
        {data.map((order) => {
          return <ParticularOrder order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
