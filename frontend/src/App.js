import { useState, React } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"

function App() {

  const [navbarOpen, setNavbarOpen] = useState(true); // change to false
  const [selectedTab, setSelectedTab] = useState("home");

  const tabChange = (newTab) => {
    setSelectedTab(newTab);
  }
  return (
    <>
      <Navbar navbarOpen={navbarOpen} selectedTab={selectedTab} tabChange={tabChange} />
      <Router />
    </>
  );
}

export default App;
