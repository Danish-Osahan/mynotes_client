import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ParticleBackground from "../../components/config/ParticleBackground";
import rg from "../../img/login.gif";
import { Animated } from "react-animated-css";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../../components/ErrorMessage";
import { register } from "../../actions/userActions";
// import axios from "axios";
import "./Registerscreen.css";
import { useDispatch, useSelector } from "react-redux";

const Registerscreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://img.zorores.com/_r/100x100/100/avatar/dragon_ball_chibi/gohan.png"
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, error } = useSelector((state) => state.userRegister);
  if (error) {
    alert(error);
  }

  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (user) {
      navigate("/mynotes");
    }
  }, [navigate, user]);

  // const [message, setMessage] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Don't Match");
    } else if (
      password === "" ||
      name === "" ||
      email === "" ||
      confirmPassword === ""
    ) {
      alert("All Fields are required");
    } else {
      // setMessage("");

      dispatch(register(name, email, password, pic));
      
    }
  };

  return (
    <>
      <ParticleBackground />

      {/* {error && <ErrorMessage variant="error">{error}</ErrorMessage>} */}
      {/* {message && <ErrorMessage variant="error">{message}</ErrorMessage>} */}

      <Animated
        animationIn="zoomInUp"
        animationInDuration={2000}
        animationOut="fadeOut"
        isVisible={true}
      >
        <Container
          component="main"
          className="contain"
          maxWidth="xs"
          style={{ width: "clamp(50%,700px,95%)" }}
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
              <img
                src={rg}
                alt="not found"
                height="120"
                width="120"
                sx={{ m: 1 }}
              />
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
                <strong>Sign Up</strong>
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
                  <Grid item xs={12} sm={6}>
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
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                      required
                      fullWidth
                      sx={{ input: { color: "white" } }}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      required
                      fullWidth
                      sx={{ input: { color: "white" } }}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                      // onChange={(e) =>
                      //   setUserData({ ...userData, password: e.target.value })
                      // }
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
                      required
                      fullWidth
                      sx={{ input: { color: "white" } }}
                      name="password"
                      label="ConfirmPassword"
                      type="password"
                      id="confirmpassword"
                      autoComplete="new-password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                  <span></span>
                  <Grid item xs={4}>
                    <FileBase64
                      sx={{ input: { color: "white" } }}
                      type="file"
                      multiple={false}
                      // onDone={({ base64 }) => setPicture(base64)}
                      onDone={({ base64 }) => setPic(base64)}
                    />
                  </Grid>
                </Grid>
              </Animated>
              <Grid container justifyContent="center">
                <Grid item>
                  <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    animationInDelay={2000}
                  >
                    <Button
                      style={{
                        marginTop: "15px",
                        width: "340px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                      id="sign"
                      type="submit"
                      fullWidth
                      // variant="contained"
                    >
                      Sign Up
                    </Button>
                  </Animated>
                </Grid>
                <Grid item>
                  <Animated
                    animationIn="bounceInRight"
                    isVisible={true}
                    animationInDelay={2000}
                  >
                    <Button
                      variant="contained"
                      id="login"
                      href="/login"
                      style={{
                        width: "340px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                      sx={{ mt: 1, mb: 2 }}
                    >
                      Already Have an Account?Signin
                    </Button>
                  </Animated>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Animated>
    </>
  );
};

export default Registerscreen;
