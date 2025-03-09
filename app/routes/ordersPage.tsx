import React from 'react';
import { useLoaderData } from '@remix-run/react';
import OrderCard from '~/components/OrdersCard';

interface orders {
    orderNo: string;
    confirmDate: string;
    orderStatus: string;
}

export const loader = async () => {
  const response = await fetch('http://localhost:5173/api/getOrders');
  const orders: orders[] = await response.json();
  return orders;
};

const OrderPage = () => {
  const orders = useLoaderData<orders[]>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">รายการคำสั่งซื้อ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {orders.map((order) => (
          <OrderCard
            key={order.orderNo}
            orderNo={order.orderNo}
            confirmDate={order.confirmDate}
            orderStatus={order.orderStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;