import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Redux from "redux";
import { login } from "../actions/auth";

export const Login = () => {
  const [auth, setAuth] = useState({
    user: "",
    name: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(auth.user, auth.name));
  };

  const handleChangue = (e) => {
    e.preventDefault();
    setAuth({ ...auth, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input type="text" id="user" onChange={handleChangue}></input>
        <br />
        <label>First name:</label>
        <input type="text" id="name" onChange={handleChangue}></input>
        <br />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
