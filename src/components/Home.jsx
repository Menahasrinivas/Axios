import React,{ useEffect,useState } from 'react'
import Topbar from './Topbar';
import AxiosCard from './Common/AxiosCards';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';
function Home() {
 let[data,setData] = useState([])
 useEffect(() => {
  getAxios();
}, []);


 const getAxios=async()=>{
              
try {
              let res = await axios.get(API_URL)
              if(res.status===200)
              {
                toast.success('data fetched Successfully!')
        
                setData(res.data.filter(e=>e.status === false));
              }
            } catch (error) {
                toast.error('Error fetching data from the API');
            }
          };
        
          
          return <div className='container-fluid'>
            <Topbar/>
            <div className='preview'>
            {
              data.map((e)=>{
                return <AxiosCard name={e.name} address={e.address} phonrnumber={e.phonenumber} email={e.email} companyname={e.comapanyname} image={e.image} key={e.id}/>
              })
            }
            </div>
          </div>
        }
        
        export default Home
 
             
