import React, { useEffect, useState } from "react";
import FormComp from "../components/FormComp";
import { useNavigate } from "react-router-dom";

const Login = ({ handleUserData }) => {
  const navigate = useNavigate();
  const LoginUserData = (data) => {
    handleUserData(data);
  };

  useEffect(() => {
    const getUserLocal = async () => {
      const response = await localStorage.getItem("userData");
      const resJson = await JSON.parse(response);
      if (resJson) {
        if (resJson.role === "customer") {
          navigate("/makeOrder");
        } else {
          navigate("/orders");
        }
      }
    };
    try {
      getUserLocal();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <FormComp LoginUserData={LoginUserData} />{" "}
    </div>
  );
};

export default Login;
