import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
         <div className="text-[#E1EBEE] w-full bg-[#0070FF] h-[100vh] container">
          <div className="register">
            <h1 className='text-center pt-12 text-3xl font-bold font-[lora]'>Your Healthcare Starts Here</h1>
          </div>
          <div className=" mx-5  mt-4 form">
            <form action="" className='space-y-8'>

                <div className="flex justify-between className">
                      <div className='w-[48%] '>
                        <label for="first_name" className="block mb-2 text-sm font-medium">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Firstname" required />
                      </div>
                      <div className='w-[48%] '>
                        <label for="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Lastname" required />
                    </div>
                </div>

                <div className="flex  justify-between">
                  <div className="w-[48%] gender">
                     <label htmlFor="gender" className="block mb-2 text-sm font-medium">Select Gender</label>
                    <select id="gender" className="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option selected>Choose Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                        <option value="null">I'd rather not say</option>
                    </select>                      
                  </div>

                  <div className="w-[48%] date">
                    <label htmlFor="" className="block mb-2 text-sm font-medium">Date of Birth</label>
                    <input type="date" name="date" id="dob" className="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                </div>

                <div className="flex justify-between">
                    <div className='w-[48%] phone'>
                        <label for="phone" class="block mb-2 text-sm font-medium">Phone number</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Phone Number" pattern="[0-9]{11}" required />
                    </div>
                    <div className="w-[48%]">
                        <label for="email" class="block mb-2 text-sm font-medium">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                </div>

                <div className="flex justify-between">
                    <div class="w-[48%]">
                        <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Password" required />
                    </div> 
                    <div class="w-[48%]">
                        <label for="confirm_password" class="block mb-2 text-sm font-medium">Confirm password</label>
                        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-[#0000ff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#0000ff] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Repeat Password" required />
                    </div> 
                </div>

                <div className="m-auto">
                <button type="submit" class="text-blue-700 hover:text-white border bg-white w-[200px] border-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Sign Up</button>
                <p class="text-sm font-light text-[#E1EBEE] ">
                      Already have an account? <Link to="/auth/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
               </p>
                </div>
            </form>
          </div>
    </div>
    </>
  )
}

export default Register