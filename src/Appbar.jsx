import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { set } from 'mongoose';

function Appbar({user,setUser}){
    const navigate=useNavigate();
    if(user!=null){
        return <div style={{display:"flex",justifyContent:"space-between",padding:4}}>
        <div>
            <Typography variant={"h6"} style={{color:"#5C76B7"}}>coursebazar</Typography>
        </div>
        <div>
            <Button style={{marginRight:10 }}
                onClick={()=>{
                    navigate("Addcourse")
                }}
            >Add Courses</Button>
            <Button style={{marginRight:10}}
                onClick={()=>{
                    navigate("Courses")
                }}
            >Courses</Button>
            <Button variant="contained" size="small"
                onClick={async ()=>{
                    localStorage.setItem("token",null);
                    setUser(null);
                    navigate("/");
                }}
            >Log out</Button>
        </div>
    </div>
    }
    else return <div style={{display:"flex",justifyContent:"space-between",padding:4}}>
        <div>
            <Typography variant={"h6"} style={{color:"#5C76B7"}}>coursebazar</Typography>
        </div>
        <div style={{}}>
            <Button variant="contained" size="small" style={{marginRight:10}}
                onClick={async ()=>{
                    navigate("/Signin")
                }}
            >Sign in</Button>
            <Button variant="contained" size="small"
                onClick={async ()=>{
                    navigate("/Signup")
                }}
            >Sign up</Button>
        </div>
    </div>
}

export default Appbar;