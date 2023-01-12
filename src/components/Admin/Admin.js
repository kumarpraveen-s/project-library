import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Contextapi/contextapi";
import classes from "./Admin.module.css";

const Admin = ({ isAdmin }) => {
  const [, state, dispatch] = useContext(Context);
  const [books, setBooks] = useState(state.filter((item) => item.requested));

  useEffect(() => {
    setBooks(books.filter((item) => item.requested));
  }, [books]);
  const RegId = "123456";
  const name = "Siva";

  return (
    <>
      {isAdmin && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Register Id</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell>Stocks</TableCell>
                <TableCell>Requested</TableCell>
                <TableCell>Accepted</TableCell>
                <TableCell>Accept</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{RegId}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.stocks}</TableCell>
                    <TableCell>{item.requested ? "yes" : "no"}</TableCell>
                    <TableCell>{item.accepted ? "yes" : "no"}</TableCell>
                    <TableCell>
                      {!item.accepted && (
                        <button
                          className={classes.button}
                          onClick={() => {
                            dispatch({ type: "Accept_Book", payload: item });
                          }}
                        >
                          Accept
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!isAdmin && <p>Login Required</p>}
    </>
  );
};

export default Admin;
