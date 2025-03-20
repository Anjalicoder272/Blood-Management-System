
import PrivateLayout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function AllRoutes() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <PrivateLayout>
              <Home />
            </PrivateLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateLayout>
              <Register />
            </PrivateLayout>
          }
        />
        <Route
          path="/login"
          element={
            // <PrivateLayout>
              <Login />
            // </PrivateLayout>
          }
        />
      </Routes>
    );
  }
  
  export default AllRoutes;