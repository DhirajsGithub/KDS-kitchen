import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MakeOrder = () => {
  const navigate = useNavigate();
  const handleOnClick = async () => {
    await localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "x-large" }}>Please login as Kitchen Dept</p>
        <Button onClick={handleOnClick} style={{ fontSize: "x-large" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default MakeOrder;
