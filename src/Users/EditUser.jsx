import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { update } from "../store/user-list.slice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditUser = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const { name, number, email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(update(data));
    navigate("/");
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:4000/users/${id}`);
    setData(result.data);
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center">Update User</h2>
      <div className="d-flex justify-content-center">
        <Form
          className="w-50  d-grid justify-content-center border"
          onSubmit={submitHandler}
        >
          <TextField
            className="w-400px mt-5"
            required
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextField
            className="w-400px mt-3"
            required
            type="number"
            name="number"
            value={number}
            onChange={changeHandler}
            id="outlined-basic"
            label="Phone No"
            variant="outlined"
          />

          <TextField
            className="w-400px mt-3"
            required
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <Button
            className="mt-3 mb-5"
            type="submit"
            variant="outlined"
            color="success"
          >
            Update User
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
