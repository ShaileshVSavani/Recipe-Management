
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   // Check if the user is logged in by checking the localStorage
//   const isLoggedIn = localStorage.getItem("user") !== null;

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Remove user data from localStorage
//     navigate("/"); // Navigate to the homepage or another appropriate page after logout
//   };

//   return (
//     <header className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-md py-4">
//       <nav className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-10">
//         {/* Logo or App Name */}
//         <h1 className="text-white text-2xl font-extrabold tracking-wide">Recipe Manager</h1>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6 text-white font-medium">

//           {/* Recipe link */}
//           {isLoggedIn && (
//             <Link
//               to="/recipe"
//               className="hover:text-yellow-200 transition duration-300"
//             >
//               Recipe
//             </Link>
//           )}

//           {/* Add Recipe link */}
//           {isLoggedIn && (
//             <Link
//               to="/add-recipe"
//               className="hover:text-yellow-200 transition duration-300"
//             >
//               Add Recipe
//             </Link>
//           )}

//           {/* Conditional Links */}
//           {!isLoggedIn ? (
//             <>
//               <Link
//                 to="/login"
//                 className="hover:text-yellow-200 transition duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="hover:text-yellow-200 transition duration-300"
//               >
//                 Signup
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/profile"
//                 className="hover:text-yellow-200 transition duration-300"
//               >
//                 Profile
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="text-yellow-200 hover:text-white transition duration-300"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;




// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   // Check if the user is logged in by checking the localStorage
//   const isLoggedIn = localStorage.getItem("user") !== null;

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Remove user data from localStorage
//     navigate("/"); // Navigate to the homepage or another appropriate page after logout
//   };

//   return (
//     <header className="bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md py-4">
//       <nav className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-10">
//         {/* Logo or App Name */}
//         <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
//           <Link to="/">Recipe Manager</Link>
//         </h1>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6 text-white font-medium">

//           {/* Recipe link */}
//           {isLoggedIn && (
//             <Link
//               to="/recipe"
//               className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
//             >
//               Recipes
//             </Link>
//           )}

//           {/* Add Recipe link */}
//           {isLoggedIn && (
//             <Link
//               to="/add-recipe"
//               className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
//             >
//               Add Recipe
//             </Link>
//           )}

//           {/* Conditional Links */}
//           {!isLoggedIn ? (
//             <>
//               <Link
//                 to="/login"
//                 className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
//               >
//                 Signup
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/profile"
//                 className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
//               >
//                 Profile
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="text-yellow-200 hover:text-white transition duration-300 text-lg sm:text-xl"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;






import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by checking the 'loggedIn' flag in localStorage
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Remove 'loggedIn' flag from localStorage
    navigate("/"); // Navigate to the homepage or another appropriate page after logout
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md py-4 fixed top-0 right-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-10">
        {/* Logo or App Name */}
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
          <Link to="/">Recipe Manager</Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white font-medium">

          {/* Recipe link */}
          {isLoggedIn && (
            <Link
              to="/recipe"
              className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
            >
              Recipes
            </Link>
          )}

          {/* Add Recipe link */}
          {isLoggedIn && (
            <Link
              to="/add-recipe"
              className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
            >
              Add Recipe
            </Link>
          )}

          {/* Conditional Links */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="hover:text-yellow-200 transition duration-300 text-lg sm:text-xl"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="text-yellow-200 hover:text-white transition duration-300 text-lg sm:text-xl"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
