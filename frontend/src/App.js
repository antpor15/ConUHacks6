import { useState, React } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router />
    </>
  );
}

export default App;
