import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from '../components/Topbar';
import AxiosCards from './Common/AxiosCards';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit(){
              let {id} = useParams()

              let [name,setName] = useState("");
              let[address,setAddress] = useState("");
              let[phone,setPhone] = useState("");
              let [email,setEmail] = useState("");
              let [company,setCompany] = useState("");
              let[image,setImage] = useState("");
              let navigate = useNavigate()

              const handleEdit =async()=>{
          try {
              let data ={name,address,phone,email,company,image,status:false}
         let res = await axios.put(`${API_URL}/${id}`,data)
          if(res.status===200)
{
              toast.success("Data Edited Successfully!")
              navigate('/dashboard')
}

} catch (error){

}

}   
const getBlogById = async()=>{
              try {
                let res = await axios.get(`${API_URL}/${id}`)
                if(res.status===200)
                {
                  setName(res.data.name)
                  setAddress(res.data.address)
                  setPhone(res.data.phone)
                  setEmail(res.data.email)
                  setCompany(res.data.company)
                  setImage(res.data.image)


                }
              } catch (error) {
                  toast.error("Internal Server Error")
              }
            } 
            useEffect(()=>{
              getBlogById();
            },[]);
          
            return <div className='container-fluid'>
                <Topbar/>
                <div className='home1'>
                <div className='form1'>
                <Form className="d-flex flex-column align-items-center"style={{textAlign:"center",marginTop:"20px"}}>
                            <Form.Group className="mb-3 w-50 mt-5">
                            <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Name</Form.Label>
                            <Form.Control value={name} type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mt-5">
                            <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Address</Form.Label>
                            <Form.Control as="textarea" value={address} type="text" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mt-5">
                            <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>phone</Form.Label>
                            <Form.Control as="textarea" value={phone} type="text" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3 w-50 mt-5">
                            <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Email</Form.Label>
                            <Form.Control as="textarea" value={email} type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 mt-5">
                            <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Company</Form.Label>
                            <Form.Control as="textarea" value={company} placeholder="company" onChange={(e)=>{setCompany(e.target.value)}}/>
                            </Form.Group>
                            

    <Form.Group className="mb-3 w-50 mt-5">
          <Form.Label>Image Url</Form.Label>
          <Form.Control as="textarea" value={image} placeholder="Image Url" onChange={(e)=>{setImage(e.target.value)}}/>
        </Form.Group>
 
          <Button variant="primary" onClick={()=>handleEdit()}>
              Submit
          </Button>
</Form>
</div>
<div className='preview1'>
              <h2 style={{textAlign:"center"}}>Preview</h2>
              <AxiosCards
              name={name}
              address={address}
              phone={phone}
              email={email}
              company={company}
              image={image}
               />
              </div>             
               </div>
              </div>   


}

          
          
export default Edit

