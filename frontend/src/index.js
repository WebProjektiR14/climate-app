import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import User from "./pages/User";
import NoPage from "./pages/NoPage";
import Kirjautuminen from "./Kirjautuminen";
import reportWebVitals from "./reportWebVitals";
import Charts from "./Charts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Kirjautuminen" element={<Kirjautuminen />} />
          <Route path="User" element={<User />} />
          <Route path="Charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
