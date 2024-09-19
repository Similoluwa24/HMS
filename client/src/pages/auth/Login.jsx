import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="text-[#E1EBEE] w-full  container">
          <div className="pt-36  login">
          <h1 className='text-3xl font-bold text-center font-[lora]'>Enter my patient portal</h1>
          </div>

          <div className="max-w-72  md:max-w-96 mx-auto my-8  forms">
          <form action="" className='space-y-8'>
              <div className="">
                  <label for="email" class="block mb-1 text-sm font-medium">Email address</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-[#000ff0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000ff0] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>

              <div class="">
                  <label for="password" class="block mb-1 text-sm font-medium ">Password</label>
                  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000ff0] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Password" required />
              </div>

              <div className="m-auto">
                  <button type="submit" class="text-[#000ff0] hover:text-white border bg-white w-[200px] border-[D0F0C0] hover:bg-[#000ff0]   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Log In</button>
                  <p class="text-sm font-light text-[#E1EBEE] ">
                        New Here? <Link to="/auth/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Join Us</Link>
                </p>
              </div>
          </form>
          </div>
        </div>
    </>
  )
}

export default Login