import React, { useContext } from "react";
import Context from "../Contextapi/contextapi";
import Card from "../UI/Card";
import classes from "./Student.module.css";

const Student = ({ isStudent }) => {
  const [, state] = useContext(Context);
  console.log(state);
  return (
    <div className={classes.student}>
      {state.map((item) => {
        return <Card key={item.id} book={item} isStudent={isStudent} />;
      })}
    </div>
  );
};

export default Student;
