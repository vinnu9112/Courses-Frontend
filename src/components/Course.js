import React from 'react';


import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap'
import axios from "axios";
import base_url from '../service/bootapi';
import {toast} from "react-toastify";

const Course=({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted");
                update(id); 
            },
            (error)=>{
                toast.error("Course Not Deleted");
            }
        )
    }

    return(
    <div><Card  className="text-center">
        <CardBody>
            <CardSubtitle>
                {course.title}
            </CardSubtitle>
            <CardText>{course.description}</CardText>
        </CardBody>
        <Container className="text-center">
            <Button color="danger"
            onClick={()=>{
                deleteCourse(course.id);
            }}>
                Delete
            </Button>
            <Button color="warning" style={{margin:5 }}>
                Update
            </Button>
        </Container>
    </Card>
    </div>)
}

export default Course;