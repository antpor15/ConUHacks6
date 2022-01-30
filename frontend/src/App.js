import { useState, React } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"
import { Wallet } from "./components/Wallet"

function App() {

  const [navbarOpen, setNavbarOpen] = useState(true); // change to false
  const [selectedTab, setSelectedTab] = useState("");

  const navbarStateChange = (navbarOpen) => {
    setNavbarOpen(navbarOpen);
  }

  const tabChange = (newTab) => {
    setSelectedTab(newTab);
  }
  return (
    <div style={{ display: 'flex' }}>
      <Navbar navbarOpen={navbarOpen} setNavBarOpen={setNavbarOpen} navbarStateChange={navbarStateChange} selectedTab={selectedTab} tabChange={tabChange} />
      <Wallet />
      <Router />
    </div>
  );
}

export default App;
