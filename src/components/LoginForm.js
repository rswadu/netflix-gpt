import { useState } from "react"

const LoginForm = () => {
  const [logStatus,setLogStatus]=useState("sign-in");

  const handleToggleSigninForm=()=>{
      logStatus==="sign-in"?setLogStatus("sign-up"):setLogStatus("sign-in")
  }
  return (
    <div className="m-40 relative w-4/12">
        <form action="" className="text-white p-5  flex flex-col  justify-center items-center bg-black bg-opacity-60 rounded-lg">
            <h1 className=" text-2xl">{logStatus}</h1>
            {logStatus==="sign-up"&&<input type="text" placeholder="full name" className="p-3 m-3 w-9/12 bg-gray-700" />}
            <input type="text" placeholder="email" className="p-3 m-3 w-9/12 bg-gray-700" />
            <input type="password" placeholder="password" className="p-3 m-3 w-9/12 bg-gray-700" />
            <button type="submit " className="p-3 m-3 bg-red-600 text-white w-9/12"> {logStatus}</button>
            <h1 className="cursor-pointer" onClick={handleToggleSigninForm}>
             {logStatus==="sign-in"? "new to netflix ? sign up here":"already registered ? sign in"}
            </h1>
        </form>
    </div>
  )
}
export default LoginForm