import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';



function About() {
  return (
    <div className='background'>
  <Container >
    <Row>
        <Col>
           <Image className='profilephoto'
          src='https://cerebriti.b-cdn.net/uploads/c8f38f4a6dc4115f5aa8e16d3f16e4a5.png'
          rounded /> 
          <h2 className='text-white'><u>About Me</u></h2>
          <p className='text-white'>Hello! My name is Farzeena and I enjoy creating things that  on the internet. My interest in web development started back in 2020.Before that Iam graduating Degree in Optometry.  
Currently iam just follow my passion as a Web designer,So Iam focused on building user interfaced websites.I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences.And Iam also excited to take this new steps in my career. <br/>
Now iam looking for better job opportunities.  </p>

   <div>
    <h3 className='text-white'><u>My Skills:</u></h3>
    <h6 className='text-white'>HTML</h6>
   <ProgressBar  animated now={95} />;
   <h6 className='text-white'>CSS</h6>
   <ProgressBar animated now={95} />;
   <h6 className='text-white'>JS</h6>
   <ProgressBar animated now={75} />;
   <h6 className='text-white'>REACT JS</h6>
   <ProgressBar animated now={75} />;
   <h6 className='text-white'>REACT BOOTSTRAP</h6>
   <ProgressBar animated now={50} />;
   </div>
    
        </Col>
    </Row>
  </Container>
        


 </div>
  )
}

export default About