import { useState, React } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"
import { Wallet } from "./components/Wallet"
import { } from "./crypto/crypto.js"

function App() {

  const [navbarOpen, setNavbarOpen] = useState(true); // change to false
  const [selectedTab, setSelectedTab] = useState("");
  const [hasWallet, setHasWallet] = useState(false);

  const navbarStateChange = (navbarOpen) => {
    setNavbarOpen(navbarOpen);
  }

  const tabChange = (newTab) => {
    setSelectedTab(newTab);
  }

  return (
    <div>
      <Navbar navbarOpen={navbarOpen} setNavBarOpen={setNavbarOpen} navbarStateChange={navbarStateChange} selectedTab={selectedTab} tabChange={tabChange} />
      <Wallet hasWallet={hasWallet} />
      <Router />
    </div>
  );
}

export default App;
