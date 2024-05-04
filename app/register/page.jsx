"use client";
import NavBar from "@/ui/NavBar";
import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://127.0.0.1:3002/register",
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar />
      <h1>Register</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setRegisterUsername(e.target.value)}
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
