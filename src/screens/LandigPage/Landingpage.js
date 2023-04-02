import { React } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import ParticleBackground from "../../components/config/ParticleBackground";
import text from "../../img/1.gif";
import "./LandingPage.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import vediobg from "../../img/bg2.mp4";
// import Tilt from "react-tilt";
const Landingpage = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <ParticleBackground />

      <div className="land">
        {/* <video src={vediobg} autoPlay loop muted /> */}

        <Animated
          animationIn="zoomInUp"
          animationInDuration={2000}
          animationOut="fadeOut"
          isVisible={true}
          className="content"
        >
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDelay={2000}
          >
            <div className="text_gif">
              <h3 className="glitch text" data-glitch="Welcome To MyNotes">
                Welcome To MyNotes
              </h3>
              <img src={text} alt="not found" height="250" width="250" />
            </div>
          </Animated>
          <div className="button">
            <Animated
              animationIn="bounceInLeft"
              isVisible={true}
              animationInDelay={2000}
            >
              <Link to="/login">
                <motion.button
                  id="sign"
                  style={{
                    width: "250px",
                    height: "40px",
                    marginBottom: "10px",
                    // fontWeight: "bolder",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <strong>Login</strong>
                </motion.button>
              </Link>
            </Animated>
            <Animated
              animationIn="bounceInRight"
              isVisible={true}
              animationInDelay={2000}
            >
              <Link to="/register">
                <motion.button
                  id="login"
                  style={{
                    width: "250px",
                    height: "40px",
                    // fontWeight: "bolder",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <strong>Signup</strong>
                </motion.button>
              </Link>
            </Animated>
          </div>
        </Animated>
      </div>
    </>
  );
};

export default Landingpage;
