import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-700">Page not found</p>
      <Link
        to="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
