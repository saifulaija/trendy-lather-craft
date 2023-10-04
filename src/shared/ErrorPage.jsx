

import { FaExclamationCircle } from 'react-icons/fa';

const ErrorPage=() => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaExclamationCircle className="text-red-500 text-5xl mb-4" />
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to the homepage</a>
    </div>
  );
}

export default ErrorPage;


