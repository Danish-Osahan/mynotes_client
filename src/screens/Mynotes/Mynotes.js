import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mainscreen from "../Mainscreen/Mainscreen";
import Header from "../../components/Header/Header";
import "./Mynotes.css";
import { Link } from "react-router-dom";
import Notes from "../Notes/Notes";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ParticleBackground from "../../components/config/ParticleBackground";
import { Animated } from "react-animated-css";
import { listNotes } from "../../actions/notesAction";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Mynotes = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notes, error } = useSelector((state) => state.noteList);
  const { userInfo } = useSelector((state) => state.userLogin);

  // const user = JSON.parse(localStorage.getItem("userInfo"))
  const { success: successCreate } = useSelector((state) => state.noteCreate);
  const { success: successUpdate } = useSelector((state) => state.noteUpdate);
  const { success: successDelete } = useSelector((state) => state.noteDelete);
  const { success:successUpdateProfile} = useSelector((state) => state.userUpdate);


  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  },
  [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <>
      <ParticleBackground />

      <Header setSearch={setSearch} />

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successUpdateProfile &&<ErrorMessage>{"Profile Update Successfully"}</ErrorMessage>}


      <Mainscreen title={userInfo?.name}>
        <Container maxWidth="xlg" className="notes">
          <Animated
            animationIn="fadeInRight"
            animationInDuration={2000}
            isVisible={true}
          >
            <div id="but" style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/createnote">
                <button id="c_note">Create New Note</button>
              </Link>
            </div>
          </Animated>

          <Container>
            <Stack
            
              direction={{ xs: "column", sm: "row" }}
              // spacing={{ xs: 1, sm: 2, md: 4 ,lg:4}}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {notes
                ?.filter((filteredNote) =>
                  filteredNote.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .reverse()
                .map((note) => (
                  <Notes
                    key={note._id}
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    picture={note.picture}
                    id={note._id}
                  />
                ))}
            </Stack>
          </Container>
        </Container>
      </Mainscreen>
    </>
  );
};

export default Mynotes;
