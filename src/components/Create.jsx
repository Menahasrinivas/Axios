import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Topbar from "./Topbar";
import AxiosCards from "./Common/AxiosCards";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [company, setCompany] = useState("");
  let [image, setImage] = useState("");
  let navigate = useNavigate();

  const handleCreate = async () => {
    try {
      let data = { name, address, phone, email, company, image, status: true };
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        toast.success("Data Created Successfully!");
        navigate("/dashboard");
    }
     } catch (error) {
     };
    }
  return 
    <div className='container-fluid'>
      <Topbar />
      <div className="homeWrapper">
        <div className="formWrapper">
          <Form >
            <Form.Group className="mb-3">
              <Form.Lable>Name</Form.Lable>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Lable>Address</Form.Lable>
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Lable>Phone</Form.Lable>
              <Form.Control
                type="text"
                placeholder="Phonenumber"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Lable>Emailail</Form.Lable>
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Lable>Company</Form.Lable>
              <Form.Control
                type="text"
                placeholder="company"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => handleCreate()}>
              Submit
            </Button>
          </Form>
          </div>
          <div className="previewWrapper">
            <h2 style={{ textAlign: "center" }}>Preview</h2>
            <AxiosCards
              name={name}
              address={address}
              phone={phone}
              email={email}
              company={company}
              image={image}/>
          </div>
        </div>
      </div>
    
  
}

export default Create
