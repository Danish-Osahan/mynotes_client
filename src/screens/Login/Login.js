import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ParticleBackground from "../../components/config/ParticleBackground";
import { useNavigate } from "react-router-dom";
import lg from "../../img/register.gif";
import { login } from "../../actions/userActions";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";
// import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your Credentials");
    } else {
      dispatch(login(email, password));
      if (error) {
        alert(error);
      }
     
    }
    
  };
  
  return (
    <>
      <ParticleBackground />
      {/* {error && <ErrorMessage variant="warning">{error}</ErrorMessage>} */}
      <Animated
        animationIn="zoomInUp"
        animationInDuration={2000}
        animationOut="fadeOut"
        isVisible={true}
      >
        <Container
          component="main"
          maxWidth="xs"
          style={{ width: "clamp(50%,700px,95%)" }}
          className="contain"
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Animated
              animationIn="fadeIn"
              isVisible={true}
              animationInDelay={2000}
            >
              <div style={{ marginLeft: "16px" }}>
                <img
                  src={lg}
                  alt="not found"
                  height="120"
                  width="120"
                  sx={{ m: 1 }}
                />
              </div>
            </Animated>
            <Animated
              animationIn="bounceInLeft"
              isVisible={true}
              animationInDelay={2000}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{
                  background:
                    "linear-gradient(126deg, #29a2fd 0%, #e200e9 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <strong>Sign In</strong>
              </Typography>
            </Animated>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Animated
                animationIn="fadeIn"
                isVisible={true}
                animationInDelay={2100}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      value={email}
                      InputLabelProps={{
                        style: {
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100%",
                          color: "white",
                        },
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      sx={{ input: { color: "white" } }}
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100%",
                          color: "white",
                        },
                      }}
                      sx={{ input: { color: "white" } }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
              </Animated>

              <div className="button">
                <Animated
                  animationIn="bounceInLeft"
                  isVisible={true}
                  animationInDelay={2000}
                >
                  <Button
                    type="submit"
                    id="sign"
                    style={{
                      width: "330px",
                      height: "40px",
                      fontWeight: "bold",
                      marginTop: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    Sign In
                  </Button>
                </Animated>
                <Animated
                  animationIn="bounceInRight"
                  isVisible={true}
                  animationInDelay={2000}
                >
                  <Button
                    href="/register"
                    variant="contained"
                    id="login"
                    style={{
                      width: "330px",
                      height: "40px",
                      fontWeight: "bold",
                      marginBottom: "-10px",
                    }}
                  >
                    Don't Have an Account? Sign Up
                  </Button>
                </Animated>
              </div>
            </Box>
          </Box>
        </Container>
      </Animated>
    </>
  );
};

export default Login;
