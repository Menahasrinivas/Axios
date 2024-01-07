import React,{ useEffect,useState } from 'react'
import Topbar from '../Topbar';
import AxiosCard from '../Common/AxiosCards';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';
function Home() {
 let[axios,setAxios] = useState([])
 const getAxios=async()=>{
              
try {
              let res = await axios.get(API_URL)
              if(res.status===200)
              {
                // toast.success('data fetched Successfully!')
        
                setBlogs(res.data.filter(e=>e.status))
              }
            } catch (error) {
                toast.error()
            }
          }
        
          useEffect(()=>{
            getAxios()
          },[])
          return <div className='container-fluid'>
            <Topbar/>
            <div className='preview'>
            {
              axios.map((e)=>{
                return <AxiosCard name={e.name} address={e.address} phonrnumber={e.phonenumber} email={e.email} companyname={e.comapanyname} image={e.image} key={e.id}/>
              })
            }
            </div>
          </div>
        }
        
        export default Home
 
             
