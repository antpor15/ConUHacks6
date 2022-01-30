import { useState, React, useEffect } from 'react'
import Router from "./pages";
import { Navbar } from "./components/Navbar"
import { Wallet } from "./components/Wallet"
import { checkBrowserWallet, getProvider, getReadOnlyContract, getAllCampaigns } from "./crypto/crypto.js"

function App() {

  const [navbarOpen, setNavbarOpen] = useState(true); // change to false
  const [selectedTab, setSelectedTab] = useState("");
  const [hasWallet, setHasWallet] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const navbarStateChange = (navbarOpen) => {
    setNavbarOpen(navbarOpen);
  }

  const tabChange = (newTab) => {
    setSelectedTab(newTab);
  }

  checkBrowserWallet().then(metam => {
    setHasWallet(metam);
  });

  useEffect(() => {
    getProvider().then((prov) => {
          let contr = getReadOnlyContract(prov);
          getAllCampaigns(contr).then((res) => {setCampaigns(res)});
    });
  }, [hasWallet]);


  return (
    <div>
      <Navbar navbarOpen={navbarOpen} setNavBarOpen={setNavbarOpen} navbarStateChange={navbarStateChange} selectedTab={selectedTab} tabChange={tabChange} />
      <Wallet hasWallet={hasWallet} />
      <Router campaigns={campaigns} />
    </div>
  );
}

export default App;
