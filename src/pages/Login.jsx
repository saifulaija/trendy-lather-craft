import  { useState } from 'react';
import Delivery from '../components/Delivery';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
  };

  return (
    <>

<div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white rounded-lg py-2 px-4 w-full hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
        <hr className="my-4" />
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white rounded-lg py-2 px-4 w-full hover:bg-red-600"
        >
          Log In with Google
        </button>
      </div>
     
    </div>

    <Delivery></Delivery>
    </>
  );
};

export default Login;
