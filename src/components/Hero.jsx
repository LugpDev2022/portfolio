import React from "react";
import Col from "react-bootstrap/Col";

const Hero = () => (
  <header className="row py-5 bg-secondary">
    <Col xs={12} className="text-center mb-4">
      <img
        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSe7vU6RlwDwFL44J6xtBdRmmqhQRg4FQYYKi0VwxV7h1v5Erv1-jiqfGxHEG9e9b8y2IfQ7INlB_IjzUMT-yg"
        alt="profile image"
        className="my-img"
      />
    </Col>
    <Col xs={12} className="mt-3">
      <h1 className="title">
        <span>Luis Alberto&nbsp;</span>
        <span>Cervantes García</span>
      </h1>
    </Col>
    <Col xs={12} className="mt-1">
      <h2 className="subtitle">Frontend Developer</h2>
    </Col>
  </header>
);

export default Hero;
