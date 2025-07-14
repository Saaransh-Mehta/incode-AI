import { Eye, EyeOff } from "lucide-react"
import {useState} from 'react'

const Login = () => {
    const [seePassword,setSeePassword] = useState<boolean>(false)
  return (
    <div className="flex justify-between items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="left-container flex justify-center items-center mx-auto">
            {/* Optional: Add some branding or image here */}
        </div>
        <div className="right-container flex justify-center items-center mx-auto">
            <div className="card h-auto w-[500px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col border border-gray-200 dark:border-gray-700">
                <div className="card-head flex flex-col p-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Create an account</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 pt-2">
                        Already a user? 
                        <a className="underline text-blue-600 dark:text-blue-400 font-medium ml-1 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" href="#">
                            Login
                        </a>
                    </p>
                </div>
                <div className="card-content flex flex-col px-8 space-y-6 relative z-10">
                    <div className="input-name flex flex-row gap-4">
                        <input 
                            placeholder="First Name" 
                            type="text" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200" 
                        />
                        <input 
                            placeholder="Last Name" 
                            type="text" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200" 
                        />
                    </div>
                    <div className="email w-full">
                        <input 
                            placeholder="Email" 
                            type="email" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200" 
                        />
                    </div>
                    <div className="password flex flex-row gap-4 items-center">
                        <input 
                            placeholder="Password" 
                            type={seePassword ? "password" : "text"} 
                            id="password" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                        />
                        <button 
                            type="button"
                            onClick={()=>setSeePassword(!seePassword)} 
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        >
                            {seePassword ? <Eye className="w-5 h-5"/> : <EyeOff className="w-5 h-5"/>}
                        </button>
                    </div>
                    <div className="terms flex items-start space-x-3">
                        <input 
                            id="terms" 
                            type="checkbox" 
                            className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-2" 
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                            I agree to the 
                            <a href="#" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 ml-1">
                                Terms of Service
                            </a> and 
                            <a href="#" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 ml-1">
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                        Create Account
                    </button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-8">
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default Login
