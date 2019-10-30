import React from 'react';
import { Link } from "react-router-dom";

const RainbowLink = (props) => {
  const colors = ['blue', 'orange', 'maroon'];
  const colorClass = `text-${colors[Math.floor(Math.random() * 3)]}`;
  return (
      <div className={colorClass}>
        <Link to={props.to}>{props.text}</Link>
      </div>
  )
};

export default RainbowLink;
