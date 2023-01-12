import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Login from "./components/LoginAdmin/Login";
import LoginStudent from "./components/LoginStudent/LoginStudent";
import Student from "./components/Students/Student";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const adminHandler = () => {
    setIsAdmin((prevState) => (prevState ? false : true));
  };

  const studentHandler = () => {
    setIsStudent((prevState) => (prevState ? false : true));
  };
  return (
    <BrowserRouter>
      <Header
        isAdmin={isAdmin}
        isStudent={isStudent}
        adminHandler={adminHandler}
        studentHandler={studentHandler}
      />
      <Routes>
        <Route path="/" element={<Student />} />
        <Route
          path="login-admin"
          element={<Login adminHandler={adminHandler} />}
        />
        <Route
          path="login-student"
          element={<LoginStudent studentHandler={studentHandler} />}
        />
        <Route path="student" element={<Student isStudent={isStudent} />} />
        <Route path="admin" element={<Admin isAdmin={isAdmin} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
