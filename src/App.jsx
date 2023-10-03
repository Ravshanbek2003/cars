// import { useState } from 'react'
import "./App.css";
import data from "./__mock__/data.js";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Cars from "./components/cars/Cars";
import Footer from "./components/footer/Footer";
import { useState } from "react";
function App() {
  const [writeCars, setWriteCars] = useState(data);
  
  return (
    <>
      <div className="container">
        <Header data={data} writeCars={writeCars}  setWriteCars={setWriteCars}/>
        <Card />
        <Cars data={data} writeCars={writeCars} setWriteCars={setWriteCars}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
