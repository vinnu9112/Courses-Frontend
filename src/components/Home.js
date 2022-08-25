import React ,{useEffect} from 'react'
import {Button, Card, Container} from 'reactstrap'

const Home =()=>{
    useEffect(()=>{
        document.title = "Home";
    },[])

    return(
        <div>
            <Card className="text-center bg-secondary" width="100%" background="lightgrey">
                <h1>
                    Courses Application
                </h1>
                <p>
                    This tutorial will guide you through the courses you want to select
                </p>
            <Container>
                <Button color='info' outline style={{margin:5}}>
                    start using now!
                </Button>
            </Container>
            </Card>
            
            
        </div>
    )
}



export default Home;