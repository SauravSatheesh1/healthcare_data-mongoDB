import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext/authState';
import { Alert } from './Alert';


export const LoginForm = ({ history }) => {
  const { login, isAuthenticated,  clearErrors, message } = useContext(AuthContext);

  useEffect(
    () => {
      if (isAuthenticated) {
        history.push('/patient');
      }
     
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated, history])



  const [user, setUser] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {

    e.preventDefault();
   
    login(user);
   
    clearErrors();
  }

  

  return (
    <div className=" flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only ">
                Username
                </label>
              <input
                id="Username"
                name="Username"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
                </label>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

            <div className="text-sm">
              <Link onClick={()=>clearErrors()} to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                New User? Sign Up
                </Link>
            </div>
          </div>

          <div>
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
            >

              Sign in
              </button>
              {message.message?<Alert/>:null}
          </div>
        </form>
      </div>
    </div>
  )
}