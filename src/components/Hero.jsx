import { useContext, useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import bg from "../assets/images/pc-bg.webp";
import { AppContext } from "../context";

export const Hero = () => {
  const { headerHeight, setHeaderHeight } = useContext(AppContext);
  const header = useRef();

  useEffect(() => {
    setTimeout(() => {
      setHeaderHeight(header.current.offsetHeight);
    }, 500);
  }, [header]);

  return (
    //TODO: Change the profile image
    <header ref={header} className="row" id="me">
      <Col xs={12} className="text-center mb-4 mt-5">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSe7vU6RlwDwFL44J6xtBdRmmqhQRg4FQYYKi0VwxV7h1v5Erv1-jiqfGxHEG9e9b8y2IfQ7INlB_IjzUMT-yg"
          alt="profile image"
          className="profile-img animate__animated animate__fadeInDown"
        />
      </Col>
      <h1 className="title col-12 mt-3 animate__animated animate__fadeInDown">
        <span>Luis Alberto&nbsp;</span>
        <span>Cervantes García</span>
      </h1>
      <h2 className="subtitle col-12 mt-1 mb-5 animate__animated animate__fadeInDown">
        Frontend Developer
      </h2>

      <img
        style={{ height: `${headerHeight}px` }}
        src={bg}
        alt="background"
        className="pc-bg animate__animated animate__fadeIn"
      />
    </header>
  );
};
