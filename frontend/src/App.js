import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <container>
          <h1>Welcome to proShop</h1>
        </container>
      </main>
      <Footer />
    </>
  );
};

export default App;
