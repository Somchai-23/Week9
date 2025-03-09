import React from 'react';
import { Link } from '@remix-run/react';

interface OrderProps {
  orderNo: string;
  confirmDate: string;
  orderStatus: string;
  priceTotal: string;
  customer: string;
}

const OrderCard: React.FC<OrderProps> = ({ orderNo, confirmDate, orderStatus, priceTotal, customer }) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-xl font-bold mb-3">
          Order ID: <span className="text-yellow-300">{orderNo}</span>
        </div>
        <div className="text-lg mb-2">
          <strong>Customer:</strong> {customer}
        </div>
        <div className="text-lg mb-2">
          <strong>Date:</strong> {confirmDate}
        </div>
        <div className="text-lg mb-4">
          <strong>Status:</strong> <span className={`text-${orderStatus === 'Completed' ? 'green' : 'red'}-500`}>{orderStatus}</span>
        </div>
        <div className="text-xl font-semibold mb-4">
          <strong>Total Price:</strong> ฿{priceTotal}
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            to={`/order/${orderNo}`}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
