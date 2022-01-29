import { useState, React } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"

function App() {

  const [navbarOpen, setNavbarOpen] = useState(true); // change to false
  return (
    <>
      <Navbar navbarOpen={navbarOpen} />
      <Router />
    </>
  );
}

export default App;
