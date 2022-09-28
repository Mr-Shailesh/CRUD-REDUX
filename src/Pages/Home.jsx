import React from "react";
import Container from "react-bootstrap/Container";
import TableR from "../Components/TableR";

const Home = () => {
  return (
    <div>
      <Container>
        <h2 className="d-flex justify-content-center">List of Users</h2>
        <TableR />
      </Container>
    </div>
  );
};

export default Home;
