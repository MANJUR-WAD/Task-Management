import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import FrontPage from "./pages/FrontPage";
import "./App.css";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
