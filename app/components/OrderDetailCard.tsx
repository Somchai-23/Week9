import React from 'react';
import { Link } from '@remix-run/react';

interface OrdersProp {
  orderNo: string;
  confirmDate: string;
  orderStatus: string;
  priceTotal: string;
  customer: string;
}

const OrderCard: React.FC<OrdersProp> = ({ orderNo, confirmDate, orderStatus, priceTotal, customer }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Order ID: {orderNo}</h3>
        </div>

        <div className="text-gray-600">
          <p><strong>Customer:</strong> {customer}</p>
          <p><strong>Order Date:</strong> {confirmDate}</p>
          <p><strong>Status:</strong> {orderStatus}</p>
          <p><strong>Total Price:</strong> ฿{priceTotal}</p>
        </div>

        <div className="mt-6 text-center">
          <Link to={`/order/${orderNo}`} className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
