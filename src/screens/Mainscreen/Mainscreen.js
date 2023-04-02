import React from "react";
import "./Mainscreen.css";
import { Animated } from "react-animated-css";

const Mainscreen = ({ title, children }) => {
  return (
    <div>
      <div>
        {title && (
          <div className="text">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1 className=" main ">Welcome {title}</h1>
            </Animated>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Mainscreen;
