import React from 'react'
import Card from 'react-bootstrap/Card';
import { API_URL } from '../../App';
function AxiosCards({ name,address, phone, email, company, image}) {
              return (
                            <div className='mx-auto my-4 d-flex justify-content-center col-11 col-md-6 col-lg-4 mx-auto col-sm-10'>
                              {/* Bootstrap Card component */}
                              <Card style={{ width: '30rem', padding: '10px' }}>
                                <Card.Title className='text-center fw-bold'>{`Name: ${name}`}</Card.Title>
                                {/* Card image with alt text and custom height */}
                                <Card.Img variant="top" src={image} alt={name} style={{ height: '25em' }} title={name} className='img-home' />
                                <Card.Body>
                                  {/* Displaying blog information in Card.Text components */}
                                  
                            
                                  <Card.Text className='text-center fw-bold'>
                                    <i>{`Address: ${address}`}</i>
                                  </Card.Text>
                                  <hr />

                                  <Card.Text className='text-center fw-bold'>
                                    <i>{`Phone: ${phone}`}</i>
                                  </Card.Text>
                                  <hr />
                                  <Card.Text className='text-center fw-bold'>
                                    <i>{`Email: ${email}`}</i>
                                  </Card.Text>
                                  <hr />
                                  <Card.Text className='text-center fw-bold'>
                                    <i>{`Company: ${company}`}</i>
                                  </Card.Text>
                                  <hr />
                                  
                                </Card.Body>
                              </Card>
                            </div>
                          );
                        }
                        

export default AxiosCards;