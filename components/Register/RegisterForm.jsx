import React from 'react';

const RegisterForm = () => {
  return (
       <>
      <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>

          <form class="space-y-5">
             <div>
                  <label class="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name='fname'
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label class="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name='email'
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-1">Password</label>
                  <input
                    type="password"
                    name='password'
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Register
                </button>
              </form>
            </div>
          </div>

    </>
  );
};

export default RegisterForm;