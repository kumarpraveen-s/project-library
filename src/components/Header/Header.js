import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = ({ isAdmin, isStudent, adminHandler, studentHandler }) => {
  const navigate = useNavigate();
  const AdminHandler = () => {
    navigate(isAdmin ? "admin" : "login-admin");
  };
  const StudentHandler = () => {
    navigate(isStudent ? "student" : "login-student");
  };
  return (
    <div className={classes.header}>
      <Link to="/"><div className={classes.heading}>E-Library</div></Link>
      {!isAdmin && !isStudent && (
        <div className={classes.button}>
          <button onClick={AdminHandler}>Admin</button>
          <button onClick={StudentHandler}>Student</button>
        </div>
      )}
      {isAdmin && (
        <div className={classes.button}>
          <span className={classes.heading__user}>
            <AccountCircleIcon />
            Admin
          </span>
          <button
            onClick={() => {
              adminHandler();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
      {isStudent && (
        <div className={classes.button}>
          <span className={classes.heading__user}>
            <AccountCircleIcon />
            Siva
          </span>
          <button onClick={() => studentHandler()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
