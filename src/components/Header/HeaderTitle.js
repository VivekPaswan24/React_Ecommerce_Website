import React from "react";
import { Container,} from "react-bootstrap";
import './HeaderTitle.css'

const HeaderTitle=()=>{
    return <Container fluid className='header-title'>
        <h1 style={{color:'white',fontSize:'5rem'}}>The Generics</h1>
    </Container>
};

export default HeaderTitle;