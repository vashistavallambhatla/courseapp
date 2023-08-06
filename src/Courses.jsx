import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Courses(){
    const navigate=useNavigate();
    const [courses,setCourses]=useState([{}]);
    useEffect(()=>{
        function callback2(data){
            console.log(data);
            setCourses(data);
        }
        function callback1(res){
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "authorization":localStorage.getItem("token")
            }
        }).then(callback1);
    },[]);
    return <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {courses.map(course=>{
            return <CourseS course={course}/>
        })}
    </div>
    function CourseS(props){
        return <Card style={{
            width:250,
            margin:10,
            minHeight:200
        }}>
            <img src={props.course.imageLink} style={{maxHeight:150}}></img>  
            <Typography variant='h6' textAlign={'center'}>{props.course.title}</Typography>
            <Typography variant='h6' textAlign={'center'}>{props.course.description}</Typography> 
            <Button variant='contained' style={{marginLeft:80}} >Open</Button>
            <br/><br/>  
            <Button variant='contained' style={{marginLeft:80}} 
                onClick={()=>{
                    fetch(`http://localhost:3000/admin/course`,{
                        method:"DELETE",
                        body: JSON.stringify({
                            courseId:props.course._id
                        }),
                        headers:{
                            "Content-type":"application/json",
                            "authorization":localStorage.getItem("token")
                        }
                    })
                }}
            >Delete</Button>     
        </Card>
    }
}

export default Courses;