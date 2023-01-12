import React, { useReducer } from "react";
import Context from "./contextapi";

const Books = [
  {
    id: 1,
    title: "Engineering circuit analysis",
    author: ["William H. Hayt", "Steve M. Durbin", "Jack E. Kemmerly"],
    stocks: 10,
    image: "https://images-na.ssl-images-amazon.com/images/I/91zllyxf5aL.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 2,
    title: "CONTROL SYSTEMS ENGINEERING",
    author: ["I J NAGRATH M.GOPAL"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41WHxmxRaiL._SX373_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 3,
    title: "Electronics and Communication",
    author: ["Susurla V S Suresh"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51L++jqu3oL._SX323_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 4,
    title: "Electronic Devices for Analog Signal Processing",
    author: ["Yu. K. Rybin"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41NB7imHLAL._SX313_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 5,
    title: "Analog Electronics - I: Basic Analog Electronics",
    author: ["J.B. Gupta"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51OBUsIE-CL._SX367_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 6,
    title: "Analog and Digital Circuit and Systems",
    author: ["Jacob Millman"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51-kkbcLkAL._SX391_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 7,
    title: "Analog Electronic Circuits for BE VTU Course",
    author: ["U. A. Bakshi A. P. Godse"],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41Za8QgANDL._SX334_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
  {
    id: 8,
    title: "Analog and Digital Electronics",
    author: ["Jr./Larry L. Kinney/Raghunandan G. H. Charles H. Roth "],
    stocks: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41JeeIwn-8L._SX371_BO1,204,203,200_.jpg",
    requested: false,
    accepted: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Request_Book":
      const Index = state.findIndex((item) => item.id === action.payload.id);
      const updateTermIndex = state[Index];
      const updateIndex = { ...updateTermIndex, requested: true };
      state[Index] = updateIndex;
      console.log(state);
      return state;
    case "Accept_Book":
      const index = state.findIndex((item) => item.id === action.payload.id);
      const updateTermIndex_Accept = state[index];
      const stock = updateTermIndex_Accept.stocks;
      const updateIndex_Accept = {
        ...updateTermIndex_Accept,
        accepted: true,
        stocks: updateTermIndex_Accept.accepted ? stock : stock - 1,
      };
      state[index] = updateIndex_Accept;
      console.log(state);
      return state;
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Books);
  return (
    <Context.Provider value={[Books, state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
