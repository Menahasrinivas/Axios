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
        
                setData1(res.data.filter(e=>e.status));
              }
            } catch (error) {
                toast.error('Error fetching data from the API');
            }
          };

          useEffect(() => {
            getData1();
          }, []);
        
          return (
            <>
             
              <Topbar />
        
              <div className="container">
              <div className="row">
                {/* <div className="col-11 col-md-6 col-lg-3 mx-auto col-sm-8"> */}
                
                {/* Mapping through axiosData to render AxiosCard for each blog */}
                {data1.map((e) => {
                  console.log(e);
                  // Adding mock address and company data for each blog
                  // e.address = {
                  //   'street': 'Mark Street',
                  //   'suite': 'first floor',
                  //   'city': 'Mumbai',
                  //   'zipcode': '92998-3874'
                  // };
                  // e.company = {
                  //    'name': 'Rolex',
                  //    'catchPhrase': 'Products of health care',
                    
                  //  };
        

         
                return (
                <AxiosCards 
                name={e.name} 
                address={e.address} 
                phone={e.phone} 
                email={e.email} 
                company={e.company} 
                image={e.image} 
                key={e.id}/>
                );
                })}
            
            </div>
          </div>
          </>
          );
        }
        
        export default Home;
 
             
