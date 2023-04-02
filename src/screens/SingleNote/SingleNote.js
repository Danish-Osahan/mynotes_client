import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import edit from "../../img/edit.gif";
import ParticleBackground from "../../components/config/ParticleBackground";
import FileBase64 from "react-file-base64";
// import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';  
import { updateNoteAction } from "../../actions/notesAction";


const SingleNote = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");

  // const [message,setMessage] = useState("");

  const { error } = useSelector((state) => state.noteUpdate);
  
 if(error){
  alert(error);
 }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  // console.log(id)
  const handleClear = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPicture("");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`);
     


      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      // setPicture(data.picture);
      
    };

    fetching();
  }, [id,]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !category || !picture) {
      alert("Please enter all Fields")
      // setMessage("Please enter all Fields")
    }
    // if(error){
    //   alert(error)
    // }
    else {
    dispatch(updateNoteAction(id,title,content,category,picture))
    handleClear();
    navigate("/mynotes");
    }
    
  };
  // useEffect(() => {
  // },);
  return (
    <>
      <ParticleBackground />
      <Header />
      {/* {error && <ErrorMessage>{error}</ErrorMessage>}
      {message && alert(message)} */}
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
                src={edit}
                alt="not found"
                height="120"
                width="120"
                // sx={{ m: 1 }}
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
                <strong>Edit Note</strong>
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
                      value={title}
                      name="title"
                      required
                      fullWidth
                      id="firstName"
                      label="Title"
                      sx={{ input: { color: "white" } }}
                      autoFocus
                      onChange={(e) => setTitle(e.target.value)}
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
                      value={category}
                      required
                      fullWidth
                      id="email"
                      label="Category"
                      sx={{ input: { color: "white" } }}
                      name="category"
                     
                      onChange={(e) => setCategory(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          
                          color: "white",
                        },
                      }}
                      value={content}
                      required
                      fullWidth
                      name="content"
                      label="Content"
                      id="password"
                        multiline
                      inputProps={{ style: { color: "white" } }}
                     
                      onChange={(e) => setContent(e.target.value)}
                      
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => setPicture(base64)}
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
                      sx={{ mt: 3 }}
                    >
                      Update
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
                      onClick={handleClear}
                      style={{
                        width: "340px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                      sx={{ mt: 1, mb: 2 }}
                    >
                      Clear
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

export default SingleNote;
