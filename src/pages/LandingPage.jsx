import React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {

  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
            Welcome to Recipe Manager
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light">
            Discover, create, and share your favorite recipes with a simple and
            easy-to-use platform.
          </p>
          <div className="mt-8">
            <Link
              to="/recipe"
              className="inline-block bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Why Choose Recipe Manager?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 font-light">
            A platform that brings all your cooking needs in one place with ease
            of access and organization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-500">
                Easy Recipe Management
              </h3>
              <p className="mt-4 text-gray-600">
                Store, edit, and manage your favorite recipes all in one place
                with a simple interface.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-500">
                Share with Friends
              </h3>
              <p className="mt-4 text-gray-600">
                Share your culinary creations with friends or the community and
                discover new dishes.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-500">
                Save Time
              </h3>
              <p className="mt-4 text-gray-600">
                Our intuitive interface helps you find recipes quickly and
                efficiently, saving you time in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-600 text-white py-16 sm:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Ready to Explore Your Culinary Passion?
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-light">
            Sign up today and start organizing and sharing your favorite
            recipes.
          </p>
          <div className="mt-8">
            {isLoggedIn ? (
              <Link
              to="/recipe"
              className="inline-block bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                 Join Now
            </Link>
            ) : (
              <Link
                to="/signup"
                className="inline-block bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Join Now
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
