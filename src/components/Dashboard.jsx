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
              let [axios,setAxios] = useState([])
       
              useEffect(() => {
                            getAxios();
                        }, []);
                    
              
              const getAxios=async()=>{
                            try {
              let res = await axios.get(API_URL)
              if(res.status===200)
              {
                            setAxios(res.data)
              }
              }catch (error){
                            toast.error("Internal Server Error")
              }
              };
              const handleDelete = async(id)=>{
                            try{
                                          let res = await axios.delete(`${Api_URL}/${id}`)
                                          if(res.status===200)
                            {
                                          toast.success(`Data Deleted Successfully!`)
                                           getAxios()}
                            } catch (error){
                                          toast.error("Internal Server Error")
                            }
              }
                      const toggleAxios = async(e)=>{
                        try{
                            e.status = !e.status
                            console.log(e)
                            let res = await axios.put(`${API_URL}/${e.id}`,e)
                            if(res.status===200)
                            {
                                          toast.success('Axios Status Changed!')
                                          getBlogs()          
                            }
                        }    catch (error) {
                      }      
                            }

                            useEffect(()=>{
                                          getBlogs()
                                        },[])
                                        return <div className='container-fluid'>
                                          <Topbar/>
                                          <div>
                                          <Table striped bordered hover>
                                            <thead>
                                              <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>PhoneNumber</th>
                                                <th>e-mail</th>
                                                <th>CompanyName</th>
                                                <th>Image</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                axios.map((e,i)=>{
                                                  return <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{e.title}</td>
                                                    <td>
                                                      <img src={e.image} alt={e.title} style={{width:"50px"}}/>
                                                    </td>
                                                    <td >
                                                      <div style={{width:"300px", overflow:"hidden", whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                                                        {e.description}
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <label className="switch">
                                                        <input type="checkbox" defaultChecked={e.status} onChange={()=>toggleBlog(e)}/>
                                                        <span className="slider round"></span>
                                                      </label>
                                                    </td>
                                                    <td>
                                                      <Button variant="info" onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                                                      &nbsp;
                                                      <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
                                                    </td>
                                                  </tr>
                                                })
                                              }
                                            </tbody>
                                          </Table>
                                          </div>
                                        </div>



              }



export default Dashboard