import React, { useRef, useState } from 'react'
import './contact.css'
import {Form,Button,Container,Row,Col,Modal} from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import Alert from 'react-bootstrap/Alert';


function Contact() {
 const form = useRef();
 const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_0nlg25f','template_bjtm0vp',form.current,'SSnrnAQV7x6ZpxXMv')
    .then((result)=>{
        console.log(result.text);
    })
 }

 
 
  return (
    <div>
        
      <Container className='box'>
        <Row className='justify-content-center'>
          <Col  xs lg="2">
        <h2 className='text-white ' >Get In Touch!</h2>
        </Col>
        </Row>
       <Form ref={form} onSubmit={sendEmail} >
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Name</Form.Label>
        <Form.Control type="text" placeholder="Type Your Name " required name='from_name' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Type Your Email Id" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-white'>Text Me</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Type Your Message here...'  required  name='message'/>
      </Form.Group>
      
      <Container fluid className='d-flex justify-content-center'>
      <Button  className='bg-dark '  variant="secondary"  type="submit" value='Send'    >
        Submit
      </Button>
     </Container>

    </Form>
</Container>
   

    </div>
  )
}

export default Contact