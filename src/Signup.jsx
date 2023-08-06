import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import e from 'cors';
import { useNavigate } from 'react-router-dom';

function Signup({setUser}){
    const navigate=useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    return <div>
       <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
            Welcome to coursebazar. Sign up below
            </Typography>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Card variant="outlined" style={{width:400,padding:20}}>
            <TextField
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                variant="outlined"
                label="username"
                fullWidth={true}
            ></TextField>
            <br/><br/>
            <TextField
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                variant="outlined"
                label="password"
                fullWidth={true}
                type="password"
            ></TextField>
            <br/><br/>
            <Button 
                variant="contained"
                size="large"
                 onClick={()=>{
                    function callback2(data) {
                        localStorage.setItem("token",data.token);
                        setUser(data.username);
                        navigate("/")
                    }
                    function callback1(res) {
                        res.json().then(callback2)
                    }
                    fetch("http://localhost:3000/admin/signup", {
                        method: "POST",
                        body: JSON.stringify({
                            username: username,
                            password: password
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(callback1)
                }}
            >Sign up</Button>
        </Card>
      </div>
    </div>
}

export default Signup;