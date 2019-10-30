import React from 'react';
import RainbowLink from "../../components/RainbowLink";
import Home from "../Home";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className='about container'>
      <h1 className="title">About us</h1>
      <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, eius, perferendis? Assumenda delectus dignissimos, et impedit ipsa libero minima molestias officiis possimus quisquam quod, repellat saepe similique. Distinctio nisi, quaerat?</div>
        <RainbowLink to="/" component={Home} text="Go to Home page"/>
     </div>
  );
};

export default About;
