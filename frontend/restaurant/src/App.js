import "./App.css";
// import Dashboard from "./components/dashboard";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/cardDetails";
import CartDetails from "./components/CartDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CartProvider } from "./components/cartContext";
import { useEffect } from "react";
// import socketClient from "socket.io-client";
// import * as io from "socket.io-client";

import io from "socket.io-client";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#404040",
    },
    secondary: {
      main: "#636363",
    },
    spacing: "8px",
  },
});

function App() {
  // useEffect(() => {
  // const socket = io("http://127.0.0.1:5002/");
  // console.log(socket);
  // // socket.on("connect", function (x) {
  // //   console.log(x);
  // //   console.log(`I'm connected with the back-end`);
  // // });

  // socket.emit("new-message", "shruit here");

  // // socket.on("hey", function (msg) {
  // //   console.log("message: ", msg);
  // // });

  // socket.on("new-message", (message) => {
  //   console.log(message);
  // });

  var socket = io("http://127.0.0.1:8080");

  socket.on("connect", () => {
    console.log(`I'm connected with the back-end`);
  });
  socket.on("connection", function (msg) {
    console.log("message: ", msg);
  });

  socket.emit("shruti", "shruti received byrser");

  socket.on("new-message", (message) => {
    console.log(message);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/cardDetails/:id" element={<CardDetails />} />
            <Route exact path="/cart" element={<CartDetails />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
