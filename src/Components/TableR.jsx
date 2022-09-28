import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../store/user-list.slice";
import { remove } from "../store/user-list.slice";
import Loader from "./Loader";
import PreviewTwoToneIcon from "@mui/icons-material/PreviewTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from "react-toastify";

const TableR = () => {
  const userState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const notify = () => toast("User deleted Successfully !!");

  const { users, loading, errorMsg } = userState;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteUser = (id) => {
    dispatch(remove(id));
    dispatch(getUsers());
    notify();
  };

  const deleteAllHandler = () => {};

  return (
    <>
      {loading && <Loader />}
      {!loading && errorMsg.length > 0 && (
        <h3 className="text-danger">{errorMsg}</h3>
      )}
      {!loading && users.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              <th>#</th>
              <th>R - Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {[...users].reverse().map((user, i) => (
            <tbody key={i}>
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.email}</td>
                <td>
                  <div
                    style={{
                      gap: "5px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`/view/${user.id}`}>
                      <Tooltip title="View" placement="top">
                        <PreviewTwoToneIcon
                          style={{ color: "green" }}
                          fontSize="large"
                        />
                      </Tooltip>
                    </Link>

                    <Link to={`/edit/${user.id}`}>
                      <Tooltip title="Edit" placement="top">
                        <EditTwoToneIcon
                          style={{ color: "blue" }}
                          fontSize="large"
                        />
                      </Tooltip>
                    </Link>

                    <Link onClick={() => deleteUser(user.id)} to="#">
                      <Tooltip title="Delete" placement="top">
                        <DeleteSweepTwoToneIcon
                          style={{ color: "red" }}
                          fontSize="large"
                        />
                      </Tooltip>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}

      <div className=" d-flex justify-content-center">
        <Link
          className=" btn btn-outline-danger mt-3"
          onClick={deleteAllHandler}
          to="#"
        >
          Delete All Users
        </Link>
        <ToastContainer />
      </div>
    </>
  );
};

export default TableR;
