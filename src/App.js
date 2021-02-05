import React from "react";
import { Provider } from "react-redux";
import { PageA } from "./pageA";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <PageA />
    </Provider>
  );
};
