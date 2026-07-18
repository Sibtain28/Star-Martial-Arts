import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/*
        LazyMotion with domAnimation loads only the features needed for
        DOM animations (~15 kB instead of the full ~50 kB bundle).
        All motion.* components inside must use `m.*` from "framer-motion"
        OR remain as `motion.*` — both work with LazyMotion.
      */}
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>
);
