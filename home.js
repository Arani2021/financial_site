import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
      <p className="mb-4">Get started by signing up or logging in.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white p-2 rounded">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 text-white p-2 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
