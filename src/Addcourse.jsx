import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useEffect, useState} from "react";

function Addcourse(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState(0);
    const [imageLink,setImageLink]=useState("");
    const [published,setPublished]=useState(false);
    return <div style={{display:"flex",justifyContent:"center"}}>
        <Card style={{width:400,padding:20,marginTop:40}}>
            <TextField variant="outlined" label="Title" fullWidth={true}
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
            ></TextField>
            <br/><br/>
            <TextField variant="outlined" label="Description" fullWidth={true}
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}
            ></TextField>
            <br/><br/>
            <TextField variant="outlined" label="Price" fullWidth={true}
                onChange={(e)=>{
                    setPrice(Number(e.target.value));
                }}
            ></TextField>
            <br/><br/>
            <TextField variant="outlined" label="imageLink" fullWidth={true}
                onChange={(e)=>{
                    setImageLink(e.target.value);
                }}
            ></TextField>
            <br/><br/>
            <TextField variant="outlined" label="Published" fullWidth={true}
                onChange={(e)=>{
                    setPublished(e.target.value==="true");
                }}
            ></TextField>
            <br/><br/>
            <Button variant="contained" size="large"
                onClick={()=>{
                    function callback2(data){
                        alert("Course added succesfully");
                        window.location="/Courses";
                    }
                    function callback1(res){
                        res.json().then(callback2);
                    }
                    fetch("http://localhost:3000/admin/courses",{
                        method:"POST",
                        body:JSON.stringify({
                            title,
                            description,
                            price,
                            imageLink,
                            published
                        }),
                        headers:{
                            "Content-type":"application/json",
                            "authorization":localStorage.getItem("token")
                        }
                    }).then(callback1)
                }}
            >Add Course</Button>
        </Card>
    </div>
}

export default Addcourse;