import React from "react";
import "./../App.css";

const ContentBox = props => (
  <section className={`theme-${props.theme} layout-box ${props.text ? 'text-box' : ''}`}>
    {props.children}
  </section>
);

export default ContentBox;
