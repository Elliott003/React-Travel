import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  HomePage,
  SignInPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
} from "./pages";
import { Navigate } from "react-router-dom";
import { useSelector } from "./redux/hooks";

const PrivateRoute = ({ children }) => {
  const jwt = useSelector((s) => s.user.token);
  return jwt ? children : <Navigate to="/login" />;
};
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search/:keywords" element={<SearchPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route
            path="/shoppingCart"
            element={
              <PrivateRoute>
                <ShoppingCartPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
