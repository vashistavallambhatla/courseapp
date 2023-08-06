import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Courses from "./Courses.jsx";
import Addcourse from "./Addcourse.jsx";
import Landing from "./Landing.jsx";
import Sidebar from "./Sidebar.jsx";
import axios from 'axios';
import setUser from '../root/user.js';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

function App(){
  const [user,setUser]=useState(null);
  const init = async()=>{
    const response = await axios.get("http://localhost:3000/admin/me",{
      headers:{
        "authorization":localStorage.getItem("token")
      }
    })
    if(response.data.username){
      console.log(response.data.username);
      setUser(response.data.username);
    }
  }
  useState(()=>{init()},[]);
 return(
  <div style={{width: "100vw",
       height: "100vh",
       backgroundColor: "#eeeeee"
  }}>
    <RecoilRoot>
    <Router>
    <Appbar user={user} setUser={setUser}/>
    <Init />
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/Addcourse"} element={<Addcourse/>}/>
        <Route path={"/Courses"} element={<Courses/>}/>
        <Route path={"/Signup"} element={<Signup setUser={setUser}/>}/>
        <Route path={"/Signin"} element={<Signin setUser={setUser} />}/>
      </Routes>
    </Router>
    </RecoilRoot>
  </div>
 )
}

function Init(){
}

export default App;