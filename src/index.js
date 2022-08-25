import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import IndexRouters from "./routes/Index";
import Login from "./pages/auth/Login";
import AuthContextProvider from "./store/auth-context";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./components/navBar/ProtectedRoute";
import Register from "./pages/auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<IndexRouters />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
