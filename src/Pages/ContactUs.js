import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import HeaderTitle from '../components/Header/HeaderTitle'

const ContactUs = (props) => {
    const enteredName=useRef();
    const enteredEmail=useRef();
    const enteredPhone=useRef();
    const reportSubmitHandler=async (event)=>{
        event.preventDefault()
        const details={
            name:enteredName.current.value,
            email:enteredEmail.current.value,
            phoneNumber:enteredPhone.current.value
        }
        try{
         await axios.post('https://react-http-71f81-default-rtdb.firebaseio.com/report.json',{details})
         enteredName.current.value=''
         enteredEmail.current.value=''
         enteredPhone.current.value=''
         
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <HeaderTitle/>
    <Container className="mt-5">
      <h2 style={{ textAlign: "center" }}>REPORT</h2>
      <Form onSubmit={reportSubmitHandler} >
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Username" ref={enteredName} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Emailid" ref={enteredEmail} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="PhoneNumber" ref={enteredPhone} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default ContactUs;
