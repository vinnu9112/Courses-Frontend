import React, {useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../service/bootapi";
import {toast} from "react-toastify";

const AddCourse = () => {

    useEffect(()=>{
        document.title = "Add Course";
    },[])

    const [course, setCourses]=useState({});

    //form event handler
    const handleForm = (e) =>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
       
    }

    //function to post data on server
    const postDataToServer=(data) =>(
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course Added Successfully");
                setCourses({id:"", title:"", description:""});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            }
        )
    )

    return (
        <div>
            <h1 className="text-center my-3">Fill your course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId"
                    onChange={(e)=>{
                        setCourses({...course, id: e.target.value });
                    }} />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title Here" id="title" 
                    onChange={(e)=>{
                        setCourses({...course, title: e.target.value });
                    }} />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" 
                    placeholder="Enter Description Here" 
                    id="description" 
                    style={{height:150}}
                    onChange={(e)=>{
                        setCourses({...course, description: e.target.value });
                    }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2" style={{margin:5}}>Clear</Button>
                </Container>

            </Form>
        </div>
    )
}

export default AddCourse;