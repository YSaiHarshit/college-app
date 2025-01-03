import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom"

function LoginForm(){

    const [ isLogin , setIsLogin ] = useState([
        {
            "component": "container",
            "classes": "bg-white p-8 rounded-lg shadow-lg w-full max-w-md",
            "children": [
              {
                "component": "heading",
                "type": "h2",
                "classes": "text-2xl font-bold text-center mb-6",
                "content": "Login"
              },
              {
                "component": "form",
                "classes": "space-y-4",
                "attributes": {
                  "method": "POST"
                },
                "children": [
                  {
                    "component": "inputGroup",
                    "label": {
                      "for": "email",
                      "content": "Email",
                      "classes": "block text-sm font-medium text-gray-700"
                    },
                    "input": {
                      "type": "email",
                      "id": "email",
                      "placeholder": "Enter your email",
                      "required": true,
                      "classes": "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    }
                  },
                  {
                    "component": "inputGroup",
                    "label": {
                      "for": "password",
                      "content": "Password",
                      "classes": "block text-sm font-medium text-gray-700"
                    },
                    "input": {
                      "type": "password",
                      "id": "password",
                      "placeholder": "Enter your password",
                      "required": true,
                      "classes": "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    }
                  },
                  {
                    "component": "button",
                    "type": "submit",
                    "classes": "w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
                    "content": "Login"
                  }
                ]
              },
              {
                "component": "footer",
                "classes": "mt-4 text-center",
                "children": [
                  {
                    "component": "link",
                    "href": "#",
                    "classes": "text-sm text-blue-500 hover:underline",
                    "content": "Forgot your password?"
                  },
                  {
                    "component": "text",
                    "classes": "text-sm mt-2",
                    "content": "Don’t have an account?"
                  },
                  {
                    "component": "link",
                    "href": "#",
                    "classes": "text-blue-500 hover:underline",
                    "content": "Sign up"
                  }
                ]
              }
            ]
          }
          
    ])
    return(

        <div className=" flex items-center justify-center min-h-screen bg-gray-200 ">

          <form action="" className=" border border-gray-400 rounded-lg shadow-md  p-10 w-full max-w-lg">
              <h2 className="text-blue-500 text-4xl  font-semibold text-center">Login</h2>

              <div className="mt-8">
                <label htmlFor="" className="text-xl ml-14 font-medium"><span>Username:</span></label>
                <input type="text" name="email" id="email" className=" ml-8  px-3 py-1  border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 rounded-md shadow-md " placeholder="Enter your Email.." required />
              </div>

              <div className="mt-8">
                <label htmlFor="" className="text-xl ml-14 font-medium">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password.." className=" ml-9 px-3 py-1 border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 rounded-md shadow-md" required />
              </div>

              <div className="mt-9">
              <button className="bg-blue-500 rounded-md w-72 px-3 py-2  ml-20 text-center text-black font-semibold hover:bg-blue-700">Login</button>
              </div>

              <div className="mt-6">
              <label htmlFor="" className="ml-36">New User? <Link to="signup" className="text-blue-600 font-semibold">Sign Up</Link></label>

              </div>
            </form>      
        </div>
    )
}

export default LoginForm;