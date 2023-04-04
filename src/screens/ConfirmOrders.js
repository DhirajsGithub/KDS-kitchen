import React, { useContext, useState } from "react";
import OrderedList from "../components/OrderedList";
import data from "../assets/orders.json";
import ordersContext from "../store/orders-store";

const ConfirmOrders = () => {
  const ctx = useContext(ordersContext);

  return (
    <>
      {ctx.confirmOrders.length === 0 && (
        <p
          style={{
            textAlign: "Center",
            fontSize: "x-large",
            marginTop: "5rem",
            color: "yellow",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
          }}
        >
          No confirm Orders
        </p>
      )}
      <OrderedList orders={ctx.confirmOrders} />
    </>
  );
};

export default ConfirmOrders;
