import React,{useState, useEffect} from "react";

import Course from "./Course";
import base_url from "../service/bootapi";
import axios from "axios";
import { toast } from "react-toastify";



const AllCourses=()=>{

    useEffect(()=>{
        document.title = "All Courses";
        getResponseFromServer();
    },[]);

    //function to call server
    const getResponseFromServer= () =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //for success
                console.log(response.data);
                toast.success("All courses loaded");
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    
    const [courses, setCourses]=useState([]);

    const updateCourses=(id)=>{
     setCourses(courses.filter((c)=> c.id != id));       
    }

    return(
        <div>
            <h1>All Courses</h1>
            <p>
                List of given courses is as follows 
            </p>

            {
                courses.length>0 ? courses.map((item)=>(
                    <Course key={item.id} course={item} update={updateCourses} /> 
                )) : "No courses"


            }
        </div>
        
    )
}

export default AllCourses;