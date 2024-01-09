import React,{useEffect,useState} from 'react'
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
 
function Dashboard(){
              let navigate = useNavigate()
               let [data1,setData1] = useState([]);
       
              const getData1=async()=>{
                            try {
              let res = await axios.get(`${API_URL}`)
              if(res.status===200)
              {
                            setData1(res.data)
              }
              }catch (error){
                            // toast.error("Internal Server Error")
                            // console.log(error)
              }
              };
              const handleDelete = async(id)=>{
                            try{
                                          let res = await axios.delete(`${API_URL}/${id}`);
                                          if(res.status === 200)
                            {
                                          toast.success(`Data Deleted Successfully!`)
                                           getData1();
                                          }
                            } catch (error){
                                          // toast.error("Internal Server Error")
                            }
                      };        
                      const toggleBlog = async(e)=>{
                        try{
                            e.status = !e.status
                            // console.log(e)
                            let res = await axios.put(`${API_URL}/${e.id}`,e)
                            if(res.status===200)
                            {
                                          toast.success('Axios Status Changed!')
                                          getData1()          
                            }
                        }    catch (error) {

                      }      
                            }

                            useEffect(()=>{
                                          getData1()
                                        })
                                        return ( <div className='container-fluid'>
                                          <Topbar/>
                                          <div>
                                          <Table striped bordered hover>
                                            <thead>
                                              <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Company</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                
                                                
                                              </tr>
                                            </thead>
                                            <tbody>
                                              
                                                {data1.map((e, i)=>(
                                                  <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.address}</td>
                                                    <td>{e.phone}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.company}</td>
                                                    <td>
                                                      <img src={e.image} alt={`Image for ${data1.name}`} style={{width:"50px"}}/>
                                                    </td>
                                                    <td >
                                                      
                                                    
                                                <label className="switch">
                                                        <input type="checkbox" defaultChecked={e.status} onChange={()=>toggleBlog(e)}/>
                                                        <span className="slider round"></span>
                                                      </label>
                                                    </td>
                                                    <td>
                                                      <Button variant="info" onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                                                      
                                                      <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
                                                    </td>
                                                  </tr>
                                                ))}
                                              
                                            </tbody>
                                          </Table>
                                          </div>
                                        </div>
                                       );
                                       }


             



export default Dashboard;