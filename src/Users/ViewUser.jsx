import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4000/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h3 className="mt-3">User Id: {id}</h3>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="list-group w-50">
          <li className="list-group-item">name: {user.name}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">phone: {user.number}</li>
        </ul>
      </div>
      <br />
      <Link to={`/edit/${user.id}`} className="btn btn-info ">
        Edit User
      </Link>
    </div>
  );
};

export default ViewUser;
