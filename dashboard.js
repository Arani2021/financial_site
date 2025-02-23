import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 mt-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
