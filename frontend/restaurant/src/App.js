import "./App.css";
// import Dashboard from "./components/dashboard";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/cardDetails";
import CartDetails from "./components/CartDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CartProvider } from "./components/cartContext";

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
