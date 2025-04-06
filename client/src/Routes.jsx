
import PrivateLayout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReceiverRegister from "./pages/ReceiverRegister";
import DonorRegister from "./pages/DonorRegister";


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
          path="/registeruser"
          element={
            <PrivateLayout>
              <DonorRegister />
            </PrivateLayout>
          }
        />
        <Route
          path="/receiver-register"
          element={
            <PrivateLayout>
              <ReceiverRegister />
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