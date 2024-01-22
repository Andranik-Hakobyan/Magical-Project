import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./aboutUs/index";
import Portfolio from "./portfolio/index";
import Courses from "./courses/index";
import Contacts from "./contacts/index";
import HomePage from "./homePage/index";
import GetInTouch from "./getInTouch/index";

export default function MainPage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/getInTouch" element={<GetInTouch />} />
        </Routes>
      </Router>
    </>
  );
}
