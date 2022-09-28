import React from "react";
import Container from "react-bootstrap/Container";
// import Table from "../Components/Table";
import TableR from "../Components/TableR";

const Home = () => {
  return (
    <div>
      <Container>
        <h2 className="d-flex justify-content-center">List of Users</h2>
        {/* <Table /> */}
        <TableR />
      </Container>
    </div>
  );
};

export default Home;
