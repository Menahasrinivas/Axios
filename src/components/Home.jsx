import React,{ useEffect,useState } from 'react'
import Topbar from './Topbar';
import AxiosCards from './Common/AxiosCards';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';
function Home() {
 let[data1,setData1] = useState([])
 
 useEffect(() => {
  getData1();
}, []);


 const getData1=async()=>{
              
try {
              let res = await axios.get(`${API_URL}`)
              if(res.status===200)
              {
                toast.success('data fetched Successfully!')
        
                setData1(res.data.filter(e=>e.status === false));
              }
            } catch (error) {
                toast.error('Error fetching data from the API');
            }
          };
        
          
          return <div className='container-fluid'>
            <Topbar/>
            <div className='preview2'>
            {
              data1.map((e)=>{
                return <AxiosCards name={e.name} address={e.address} phone={e.phonen} email={e.email} company={e.comapany} image={e.image} key={e.id}/>
              })
            }
            </div>
          </div>
        }
        
        export default Home
 
             
