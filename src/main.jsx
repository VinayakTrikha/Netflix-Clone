import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Browse from "./components/Browse.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import AuthGuard from "./guards/AuthGuard.jsx";
import LoginGuard from "./guards/LoginGuards.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
