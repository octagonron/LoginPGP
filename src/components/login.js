import React from 'react';

const LoginForm = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/login-bg.png")' }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
        <p className="text-gray-400 mb-8">Sign in to continue.</p>
        
        <form className="w-full max-w-md space-y-4 px-4">
          <input
            type="text"
            placeholder="NAME"
            className="w-full bg-black/50 border border-green-500/30 rounded-lg p-4 text-white"
          />
          
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full bg-black/50 border border-green-500/30 rounded-lg p-4 text-white"
          />
          
          <button
            type="submit"
            className="w-full bg-black/50 text-white p-4 rounded-lg border border-green-500/30"
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
