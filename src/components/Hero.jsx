import React, { useContext, useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import bg from "../assets/pc-bg.webp";
import { AppContext } from "../context";

export const Hero = () => {
  const { headerHeight, setHeaderHeight } = useContext(AppContext);
  const header = useRef();

  useEffect(() => {
    setHeaderHeight(header.current.offsetHeight);
  }, [header]);

  //TODO: Apply a best solution
  useEffect(() => {
    setTimeout(() => {
      const newHeight = header.current.offsetHeight;

      if (newHeight !== headerHeight) {
        setHeaderHeight(newHeight);
      }
    }, 300);
  }, []);

  return (
    //TODO: Change the profile image
    <header ref={header} className="row" id="me">
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
        style={{ height: `${headerHeight}px` }}
        src={bg}
        alt="background"
        className="pc-bg"
      />
    </header>
  );
};
