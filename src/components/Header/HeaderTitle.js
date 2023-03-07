import React from "react";
import { Container,} from "react-bootstrap";
import './HeaderTitle.css'

const HeaderTitle=(props)=>{
    return <Container fluid className='header-title'>
        <h1 style={{color:'white',fontSize:'5rem'}}>The Generics</h1>
        {props.home &&<button type="click" className="homeButton">Get Our Latest Album</button>}
    </Container>
};

export default HeaderTitle;