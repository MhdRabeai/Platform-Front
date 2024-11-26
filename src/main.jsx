import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./services/UserContext.jsx";
import { ConfigProvider } from "antd";
import BotProvider from "./services/ChatContext";
import "./index.css";
import App from "./App.jsx";
// import { ContextProvider } from "./services/SocketContext.jsx";
import("preline");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{ token: { colorPrimary: "#4f9451" } }}>
        <UserProvider>
          <BotProvider>
            {/* <ContextProvider> */}
            <App />
            {/* </ContextProvider> */}
          </BotProvider>
        </UserProvider>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
