
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignupPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve the existing users from localStorage
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if the user already exists
//     const userExists = existingUsers.some((user) => user.email === email);
//     if (userExists) {
//       setMessage('User already exists');
//       return;
//     }

//     // Save new user data
//     const newUser = { email, password };
//     existingUsers.push(newUser);
//     localStorage.setItem('users', JSON.stringify(existingUsers));

//       setMessage('Signup successful!');
      
//       navigate('/recipe')
      
//       // Clear form fields
//       setEmail('');
//       setPassword('');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-extrabold text-center text-indigo-600 mb-6">Signup for a New Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//         {message && (
//           <p className={`mt-4 text-center ${message === 'Signup successful!' ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setMessage('User already exists');
      return;
    }

    // Save new user data
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Set the loggedIn flag to true
    localStorage.setItem('loggedIn', 'true');

    setMessage('Signup successful!');

    // Redirect to the recipe page
    navigate('/recipe');

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-center text-indigo-600 mb-6">
          Signup for a New Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message === 'Signup successful!' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
