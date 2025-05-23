import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";
import ReportIssue from "../pages/ReportIssue";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Feedback from "../pages/Feedback";
import Complaint from "../pages/Complaint";
import Home from "../pages/Home";
import Preview from '../pages/Preview';
import AdminLogin from "../Admin/AdminLogin";


const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/home" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      
      {/* Protected Routes */}
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/report" element={<PrivateRoute><ReportIssue /></PrivateRoute>} />
      <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
      <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
      <Route path="/complaint" element={<PrivateRoute><Complaint /></PrivateRoute>} />
      <Route path="/preview" element={<PrivateRoute><Preview /></PrivateRoute>} />
      

      {/* Redirect to home if no match */}

      <Route path="*" element={<Navigate to="/home" replace />} />

    </Routes>
  );
};

export default AppRoutes;