import React from "react";

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Features,
  Footer,
  WhatGPT3,
  Possibility,
  Header,
  Blog,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
