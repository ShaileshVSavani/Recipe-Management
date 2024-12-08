// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve the stored user data from localStorage
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       setMessage('No user found. Please sign up first.');
//       return;
//     }

//     const parsedUser = JSON.parse(storedUser);

//     // Check if entered credentials match stored user data
//     if (email === parsedUser.email && password === parsedUser.password) {
//         setMessage('Login successful!');
//         navigate("/recipe")
        
//     } else {
//       setMessage('Invalid credentials');
//       }
//       // Clear the form inputs after successful login
//       setEmail('');
//       setPassword('');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-extrabold text-center text-indigo-600 mb-6">Login to Your Account</h2>
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
//               Log In
//             </button>
//           </div>
//         </form>
//         {message && (
//           <p className={`mt-4 text-center ${message === 'Login successful!' ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user matching the email and password
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage('Login successful!');
      // Optionally, set a session token or a flag for logged-in state
        localStorage.setItem('loggedIn', true);
        navigate("/recipe")

        setEmail("")
        setPassword("")
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-center text-indigo-600 mb-6">Login to Your Account</h2>
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
              Log In
            </button>
          </div>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message === 'Login successful!' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
