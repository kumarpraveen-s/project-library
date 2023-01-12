import React, { useContext } from "react";
import Context from "../Contextapi/contextapi";
import classes from "./Card.module.css";
const Card = ({ book, isStudent }) => {
  const [, , dispatch] = useContext(Context);

  const handleRequest = () => {
    dispatch({ type: "Request_Book", payload: book });
  };
  return (
    <div className={classes.card}>
      <p className={classes["card-center"]}>
        <img
          src={book.image}
          alt={book.title}
          className={classes["card-image"]}
        />
      </p>
      <h2 className={classes["card-heading"]}>{book.title}</h2>
      <p className={classes["card-stocks"]}>
        <span>Stocks Available : </span>
        <span>{book.stocks}</span>
      </p>
      {isStudent && (
        <p className={classes["card-center"]}>
          <button className={classes.button} onClick={handleRequest}>
            Request
          </button>
        </p>
      )}
      {!isStudent && (
        <p className={classes["card-center"]}>
          <button className={classes["button-disabled"]} disabled>
            Request
          </button>
        </p>
      )}
    </div>
  );
};

export default Card;
