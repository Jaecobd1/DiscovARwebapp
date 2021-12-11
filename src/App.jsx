import React from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Account from "./components/Account";
import Chain from "./components/Chain";
import CoinPrice from "./components/CoinPrice";
import Contract from "./components/Contract/Contract";
import ERC20Balance from "./components/ERC20Balance";
import ERC20Transfers from "./components/ERC20Transfers";
import InchDex from "./components/InchDex";
// import NFTBalance from "./components/NFTBalance";
import Wallet from "./components/Wallet";
import { Flex } from "./uikit/Flex/Flex";
import Map from './Pages/Map';
import LogoNB from './LogoNB.png';
import DAR from './Dar.png';
import Footer from './components/Footer/Footer';

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "100px",
  },
  headerRight: {
    display: "flex",
    gap: "10px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "800",
    color: "#374f72",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
  },
  navLinkActive: {
    textDecoration: "none",
    fontWeight: "800",
    color: "#041836",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
  },
  navBar: {
    display: "flex",
    gap: "30px",
  },
};
const App = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <Router>
      <Flex container justifyContent="space-between" alignItems="center" margin="15px 0" padding="0 20px">
        <Logo />
        <div style={styles.navBar}>
          {/* <NavLink to="/wallet" style={styles.navLink} activeStyle={styles.navLinkActive}>
            Wallet
          </NavLink> */}
          <NavLink to="/1inch" style={styles.navLink} activeStyle={styles.navLinkActive}>
            Swap
          </NavLink>
          <NavLink to="/erc20balance" style={styles.navLink} activeStyle={styles.navLinkActive}>
            Token Balance
          </NavLink>
          <NavLink to="/erc20transfers" style={styles.navLink} activeStyle={styles.navLinkActive}>
            Token Transfers
          </NavLink>
          {/* <NavLink to="/nftBalance" style={styles.navLink} activeStyle={styles.navLink}> 
            NFT Balance
          </NavLink> */}
          <NavLink to="/Map" style={styles.navLink} activeStyle={styles.navLinkActive}>
            Map
          </NavLink>
        </div>
        <div style={styles.headerRight}>
          <CoinPrice
            address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
            chain="eth"
             image={DAR}
             size="40px"
          />
          <Chain />
          <Account />
        </div>
      </Flex>
      <div style={styles.content}>
        <Switch>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/1inch">
            <InchDex chain="bsc" />
          </Route>
          <Route path="/erc20balance">
            <ERC20Balance />
          </Route>
          <Route path="/erc20transfers">
            <ERC20Transfers />
          </Route>
          {/* <Route path="/nftBalance">
            <NFTBalance />
          </Route> */}
          <Route path="/Map">
            <Map />
          </Route>
          {/* <Redirect from="/" to="/wallet" /> */}
        </Switch>
        {isAuthenticated ? <Redirect to="/wallet" /> : <Redirect to="/home" />}
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export const Logo = () => (
  <img src={LogoNB} className="Logo" width="150" height="38" viewBox="0 0 50 38" fill="none" />
);

export default App;
