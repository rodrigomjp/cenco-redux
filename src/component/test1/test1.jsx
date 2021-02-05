import React from "react";
import { useSelector } from "react-redux";

export const Test1 = () => {
  const state = useSelector((state) => state);
  const { name } = state.auth;
  return (
    <>
      <h1>Pagina Test 1</h1>
      <p>{name}</p>
    </>
  );
};
