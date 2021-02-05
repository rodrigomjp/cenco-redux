import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAsync } from "../../actions/auth";

export const Inicio = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { name, user } = state.auth;
  const handleClick = () => {
    dispatch(loginAsync());
  };
  return (
    <>
      <h1>Pagina Principal</h1>
      <p></p>
      <p>User:</p>
      <p>{user}</p>
      <p>Name:</p>
      <p>{name}</p>
      <br />
      <br />
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Cambiar Estado Async Thunk Middleware
      </button>
    </>
  );
};
