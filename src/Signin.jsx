import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import App from './App';
import {useNavigate} from "react-router-dom";

function Signin({setUser}){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:150,marginBottom:10}}>
            <Typography variant={"h6"}>Welcome Back! Login below</Typography>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Card variant="outlined" style={{width:400,padding:20}}>
                <TextField variant="outlined" fullWidth={true} label="Username"
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                ></TextField>
                <br/><br/>
                <TextField variant="outlined" fullWidth={true} label="Password"
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                ></TextField>
                <br/><br/>
                <Button variant="contained" size="large"
                    onClick={()=>{
                        fetch("http://localhost:3000/admin/login",{
                            method:"POST",
                            headers:{
                                "Content-type":"application/json",
                                "username":username,
                                "password":password
                            }
                        }).then(callback1);
                        function callback1(res){
                            res.json().then((data)=>{
                                localStorage.setItem("token",data.token);
                                console.log(data);
                                setUser(data.username);
                                navigate("/");
                            })
                        }
                    }}
                >Sign in</Button>
            </Card>
        </div>
    </div>
}

export default Signin;