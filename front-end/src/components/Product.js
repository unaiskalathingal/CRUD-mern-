import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



function Product() {

 const handleDelete= async (id)=>{
   try{
    axios.delete('http://localhost:5000/api/products/'+id)

   }catch(err){
    console.log(err)
   }
   }

const [product ,setProduct]=useState([])
    

useEffect(()=>{
    axios.get('http://localhost:5000/api/products/')
  .then(res=> setProduct(res.data))
  .catch(err=> console.error())
})



  return (

    <div className=' d flex vh-100 bg-primary justify-content-center align-items-centre'>
         <div className='w-50 bg-white rounded'>
           <Link to='/create' className='btn btn-success'> create </Link>
           <table className='table'>
         <thead>
             <tr>
                <th>product</th>
                <th>description</th>
                <th>price</th>
                <th>action</th>
             </tr>
         </thead>
         <tbody>
         {
            product.map((data)=>(
                <tr >
                 <td>{data.name}</td>
                 <td>{data.description}</td>
                 <td>{data.price}</td>
                 <td>


                 <Link to={`Update/${data._id}`} className='btn btn-primary'>Update</Link>
                 {/* data._id    eee id database ulla pole venam */}
                 <button className='btn btn-danger ms-2' onClick={e=>{handleDelete(data._id)}} >Delete</button>

                 </td>
        
                </tr>
            ))
         }
         </tbody>
        
            </table>
        </div>
    </div>
  )
}

export default Product
