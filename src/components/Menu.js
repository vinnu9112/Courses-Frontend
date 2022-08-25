import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";
const Menu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">
                View Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about-us">
                About Us
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact-us">
                Contact Us
            </Link>
        </ListGroup>
    )
}

export default Menu;