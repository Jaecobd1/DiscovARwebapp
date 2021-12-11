import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
const APP_ID = "v1tanNLErizMrsLtFx2O8LCoRmN7oBrwwdTqDV1h";
const SERVER_URL = "https://pil1fyv6xekj.usemoralis.com:2053/server";

/** Get your free Moralis Account https://moralis.io/ */
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={'v1tanNLErizMrsLtFx2O8LCoRmN7oBrwwdTqDV1h'} serverUrl={'https://pil1fyv6xekj.usemoralis.com:2053/server'}>
      <MoralisDappProvider>
        <App />
      </MoralisDappProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
