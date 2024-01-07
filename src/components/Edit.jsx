import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from '../components/Topbar';
import AxiosCard from './Common/AxiosCards';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit(){
let {id} = useParams()

let [name,setName] = useState("")
              let[address,setAdrs] = useState("")
              let[phonenumber,setPhn] = useState("")
              let [email,seteMail] = useState("")
              let [companyname,setCompany] = useState("")
              let[image,setImage] = useState("")
              let navigate = useNavigate()

              const handleCreate = async()=>{
          try {
              let data ={name,address,phonenumber,email,companyname,image,status:false}
         let res = await axios.post(API_URL,data)
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
                  setTitle(res.data.name)
                  setImage(res.data.address)
                  setPhn(res.data.phonenumber)
                  seteMail(res.data.email)
                  setCompany(res.data.companyname)
                  setImage(res.data.image)


                }
              } catch (error) {
                  toast.error("Internal Server Error")
              }
            } 
            useEffect(()=>{
              getBlogById()
            },[])
          
            return <div className='container-fluid'>
                <Topbar/>
                <div className='home'>
                <div className='form'>
                <Form>
                            <Form.Group className="mb-3">
                            <Form.Lable>Name</Form.Lable>
                            <Form.Control type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Lable>Address</Form.Lable>
                            <Form.Control type="text" placeholder="Address" onChange={(e)=>{setAdrs(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Lable>Phonenumber</Form.Lable>
                            <Form.Control type="text" placeholder="Phonenumber" onChange={(e)=>{setPhn(e.target.value)}}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                            <Form.Lable>e-mail</Form.Lable>
                            <Form.Control type="text" placeholder="email" onChange={(e)=>{seteMail(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Lable>CompanyName</Form.Lable>
                            <Form.Control type="text" placeholder="companyname" onChange={(e)=>{setCompany(e.target.value)}}/>
                            </Form.Group>
                            

                            <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Image Url" onChange={(e)=>{setImage(e.target.value)}}/>
        </Form.Group>
 
          <Button variant="primary" onclick={()=>handleCreate()}>
              Submit
          </Button>
</Form>
</div>
<div className='preview'>
              <h2 style={{textAlign:"center"}}>Preview</h2>
              <AxiosCard
              name={name}
              address={address}
              phonenumber={phonenumber}
              email={email}
              companyname={companyname}
              image={image}
               />
              </div>             
               </div>
              </div>   


}

          
          
          export default Edit

