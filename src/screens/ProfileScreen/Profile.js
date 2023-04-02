import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ParticleBackground from "../../components/config/ParticleBackground";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { updateProfile } from "../../actions/userActions";
 



const Profile = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.userLogin);
  const { success} = useSelector((state) => state.userUpdate);


  const navigate = useNavigate();
  const dispatch = useDispatch();



  useEffect(() => {
   if(!userInfo){
    navigate("/")
   }
   else{
    setName(userInfo.name)
    setPic(userInfo.pic)
    setEmail(userInfo.email)
   }

    
  }, [userInfo,navigate]);

  useEffect(()=>{
    if(success){
      navigate('/mynotes');
    }
  },[success,navigate])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password!== confirmPassword){
      alert("Passwords Dont match");
    }
    else{
      dispatch(updateProfile({ name, email, password, pic }));
      

    }
  };
 
  return (
    <>
      <ParticleBackground />
      <Header />
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
              <Avatar
                src={pic}
                alt="not found"
                sx={{ width: 100, height: 100,m: 1 }}
              
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
                  background: "linear-gradient(126deg, #29a2fd 0%, #e200e9 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <strong>Profile</strong>
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
                      autoComplete="given-name"
                      value={name}
                      name="name"
                      required
                      fullWidth
                      id="firstName"
                      label="Name"
                      sx={{ input: { color: "white" } }}
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      // onChange={(e) =>
                      //   setUserData({ ...userData, name: e.target.value })
                      // }
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
                      value={email}
                      required
                      fullWidth
                      id="email"
                      label="Category"
                      sx={{ input: { color: "white" } }}
                      name="email"
                     
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          
                          color: "white",
                        },
                      }}
                    //   value={userInfo.password}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      id="password"
                        multiline
                      inputProps={{ style: { color: "white" } }}
                     
                      onChange={(e) => setPassword(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          
                          color: "white",
                        },
                      }}
                    //   value={userInfo.password}
                      required
                      fullWidth
                      name="password"
                      label="ConfirmPassword"
                      id="password"
                        multiline
                      inputProps={{ style: { color: "white" } }}
                     
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <FileBase64
                      type="file"
                      multiple={false}
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
                        width: "340px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                      id="sign"
                      type="submit"
                      fullWidth
                      sx={{ mt: 3,mb:2 }}
                    >
                      Update
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

export default Profile;
