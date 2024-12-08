import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data from localStorage
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser[0]); // Assuming we have an array of users
    } else {
      navigate("/login"); // If no user data, redirect to login
    }
  }, [navigate]);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Remove 'loggedIn' flag from localStorage
    navigate("/"); // Navigate to the homepage after logout
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Profile
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl text-gray-700 font-medium">Email</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
        

        <div className="flex justify-center items-center">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
