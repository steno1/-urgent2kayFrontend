import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateRequest from "../pages/CreateRequest";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-request" element={<CreateRequest />} />
      <Route path="/dashboard" element={<Dashboard role="user" />} />
    </Routes>
  );
};

export default AppRoutes;
