import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import bg from "../assets/pc-bg.webp";

export const Hero = () => {
  const [bgHeight, setBgHeight] = useState(0);
  const header = useRef();

  useEffect(() => {
    setBgHeight(header.current.offsetHeight);
  }, [header]);

  return (
    //TODO: Change the profile image
    <header ref={header} className="row">
      <Col xs={12} className="text-center mb-4 mt-5">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSe7vU6RlwDwFL44J6xtBdRmmqhQRg4FQYYKi0VwxV7h1v5Erv1-jiqfGxHEG9e9b8y2IfQ7INlB_IjzUMT-yg"
          alt="profile image"
          className="my-img"
        />
      </Col>
      <h1 className="title col-12 mt-3">
        <span>Luis Alberto&nbsp;</span>
        <span>Cervantes García</span>
      </h1>
      <h2 className="subtitle col-12 mt-1 mb-5">Frontend Developer</h2>

      <img
        style={{ height: `${bgHeight}px` }}
        src={bg}
        alt="background"
        className="pc-bg"
      />
    </header>
  );
};
