import React, { useEffect, useState } from "react";
import classes from "./HeaderComp.module.css";
import { NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <div className={classes.main}>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.active : classes.navLinkStyle
        }
        to="/orders"
      >
        All Orders
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.active : classes.navLinkStyle
        }
        to="/confirmOrders"
      >
        Cofirm Orders
      </NavLink>
    </div>
  );
};

export default HeaderComp;
