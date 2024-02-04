import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState ,useEffect} from 'react';
import { Link, Navigate, useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';



function Update() {


  const [name,setName]=useState('')
    const [description,setDiscription]=useState('')
    const [price,setPrice]=useState('')
    const {id} =useParams()
    const navigate =useNavigate()



          //ith njn  chat gpt yil ninnum eduthatha aan for update cheyyumbool input fieldil old val;ue kanaan  (old code full copy cheyth gptyil paste cheyth place holder old value vekkan paranju)
         useEffect(() => {

         // Fetch old values or use initial values
         const fetchOldValues = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            const { name: oldName, description: oldDescription, price: oldPrice } = response.data;
            setName(oldName || ''); // Use old value or set empty string
            setDiscription(oldDescription || ''); // Use old value or set empty string
            setPrice(oldPrice || ''); // Use old value or set empty string
           } catch (error) {
            console.error(error);
           }
           };
           fetchOldValues();
           }, [id]);
    



     function handleSubmit (e){
     
        
      e.preventDefault();
      
      axios.put('http://localhost:5000/api/products/'+id,{name,description,price})
      .then(res=>{
        console.log(res)
        navigate('/')
        
        
      }).catch(err=>console.log(err))

    }


  return (
    <Form onSubmit={handleSubmit}  > 
    

    <h1> Update</h1>
   
   
    <Form.Group className="mb-3" controlId="name">
      <Form.Label><h5>Product Name</h5></Form.Label>
      <Form.Control required onChange={e => setName(e.target.value)} type="name" placeholder=" Product Name" defaultValue={name} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="discription">
      <Form.Label> <h6>Discription</h6></Form.Label>
      <Form.Control required onChange={e =>setDiscription(e.target.value)} type="discription" placeholder="Discription" defaultValue={description} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="price">
      <Form.Label> <h5>Price</h5></Form.Label>
      <Form.Control required onChange={e => setPrice(e.target.value)} type="price" placeholder="Price" defaultValue={price}/>
    </Form.Group>
    
    <Button  variant="success" type="submit">Update</Button>
    <Link to='/' className='btn btn-primary'> Back </Link>

  </Form>
  )
}

export default Update
