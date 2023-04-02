import "./App.css";
// import Footer from "./components/Footer/Footer";

import Landingpage from "./screens/LandigPage/Landingpage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Mynotes from "./screens/Mynotes/Mynotes";
import Registerscreen from "./screens/Registerscreen/Registerscreen";
import Login from "./screens/Login/Login";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useSelector } from "react-redux";
import Profile    from "./screens/ProfileScreen/Profile"



function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landingpage />}></Route>
          {userInfo ?( <Route exact path="/mynotes" element={<Mynotes />}></Route>):( <Route exact path="/mynotes" element={<Landingpage />}></Route>)}
          <Route exact path="/register" element={<Registerscreen />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/createnote" element={<CreateNote/>}></Route>
          <Route exact path="/note/:id" element={<SingleNote/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
