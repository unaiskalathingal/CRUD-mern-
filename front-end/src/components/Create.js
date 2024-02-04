import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';



function Create() {

  const [name,setName]=useState('')
    const [description,setDiscription]=useState('')
    const [price,setPrice]=useState('')
    const navigate =useNavigate()


     function handleSubmit (e){
     
      
      e.preventDefault();
      
      axios.post('http://localhost:5000/api/products/',{name,description,price})
      .then(res=>{
        console.log(res)
        navigate('/')
        
        
      }).catch(err=>console.log(err))

    }


  return (
    <Form onSubmit={handleSubmit}  > 
    

    <h1> Add New</h1>
   
   
    <Form.Group className="mb-3" controlId="name">
      <Form.Label><h5>Product Name</h5></Form.Label>
      <Form.Control required onChange={e => setName(e.target.value)} type="name" placeholder=" Product Name" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="discription">
      <Form.Label> <h6>Discription</h6></Form.Label>
      <Form.Control required onChange={e =>setDiscription(e.target.value)} type="discription" placeholder="Discription" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="price">
      <Form.Label> <h5>Price</h5></Form.Label>
      <Form.Control required onChange={e => setPrice(e.target.value)} type="price" placeholder="Price" />
    </Form.Group>
    
    <Button  variant="success" type="submit">Create</Button>
    <Link to='/' className='btn btn-primary'> Back </Link>

  </Form>
  )
}

export default Create
