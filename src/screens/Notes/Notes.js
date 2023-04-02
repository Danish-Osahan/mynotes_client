import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Notes.css";
import bin from "../../img/bin.gif";
import edit from "../../img/bin2.gif";
import { motion } from "framer-motion";
import { Animated } from "react-animated-css";
import { deleteNoteAction } from "../../actions/notesAction";
import { useDispatch,useSelector } from "react-redux";


export default function Notes({ title, content, category, picture ,id }) {
  const { error } = useSelector((state) => state.noteDelete);
  if(error){
    alert(error);
  }
  const dispatch= useDispatch();
  const handleDelete = ()=>{
    if (window.confirm("Are you sure, You Want To Delete This Note?")) {
      dispatch(deleteNoteAction(id));
      
    }
  }
  const date = new Date().toLocaleDateString();
  return (
    
    <Animated
      animationIn="bounceInLeft"
      isVisible={true}
      animationInDuration={2500}
    >
      <Card  sx={{ maxWidth: 345, marginBottom: "18px" }} id="card">
        <CardMedia sx={{ height: 140 }} image={picture} title={title} />
        <CardContent>
          <Animated
            animationIn="bounceInRight"
            isVisible={true}
            animationInDelay={1500}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "white" }}
            >
              {title}
            </Typography>
          </Animated>
          <Animated
            animationIn="bounceInLeft"
            isVisible={true}
            animationInDelay={1500}
          >
            <Chip
              label={`Category:- ${category}`}
              sx={{ color: "white", marginBottom: "10px" }}
              id="chip"
              size="small"
            />
          </Animated>
          <Animated
            animationIn="bounceInRight"
            isVisible={true}
            animationInDelay={1500}
          >
            <Typography variant="body2" style={{ color: "white" }}>
              {content}
            </Typography>
          </Animated>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>
            <motion.img
              src={bin}
              height={30}
              width={30}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </Button>
          <Button href={`/note/${id}`} style={{ marginLeft: "-28px" }}>
            <motion.img
              src={edit}
              height={30}
              width={30}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </Button>

          <Animated
            animationIn="bounceInRight"
            isVisible={true}
            animationInDelay={1500}
          >
            <Chip
              label={`Created On:- ${date}`}
              sx={{
                color: "white",
                marginBottom: "10px",
                alignSelf: "flex-end",
                marginLeft: "50px",
              }}
              id="chip"
              size="small"
            />
          </Animated>
        </CardActions>
      </Card>
    </Animated>
  );
}
