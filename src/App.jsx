import React from "react";
import SortMachine1 from "./components/SortMachine1";
import Navbar from "./components/Navbar";
import "./style/App.css";


function App() {
  return (
    <React.StrictMode>
      <section className="Main">
        <Navbar />
        <SortMachine1 />
      </section>
    </React.StrictMode>
  );
}

export default App;