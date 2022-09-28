import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/user-list.slice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialState = {
  id: "",
  name: "",
  number: "",
  email: "",
};

const AddUser = () => {
  const [data, setData] = useState(initialState);

  const navigate = useNavigate();
  const { name, number, email } = data;

  const id = Math.floor(Math.random() * 1000000 + 1);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, id: id });
  };

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(add(data));
    navigate("/");
  };

  return (
    <Container>
      <h2 className="d-flex justify-content-center">Add User</h2>
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
            Add User
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddUser;
