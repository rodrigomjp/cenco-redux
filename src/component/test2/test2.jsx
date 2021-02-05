import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/auth";

export const Test2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.auth;
  const handleClick = () => {
    dispatch(login("userchangue", "Nuevo Usuario"));
  };
  return (
    <>
      <h1>Pagina Test 2</h1>
      <p>{user}</p>
      <br />
      <br />
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Cambiar Estado
      </button>
    </>
  );
};
