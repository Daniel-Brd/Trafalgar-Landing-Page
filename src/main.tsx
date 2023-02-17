import React from "react";
import ReactDOM from "react-dom/client";
import OurServices from "./components/our-services/our-services";
import Header from "./components/header/header";
import { GlobalStyle } from "./components/global-style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <OurServices />
  </React.StrictMode>
);
