import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  
  const navigate=useNavigate();


  const handleSignout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
  console.log("signout");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    
        <div className="w-screen absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
             <div className="flex text-black font-bold">
              <div className="m-4 p-2 ">profile</div>
              <div className="m-4 p-2 " onClick={handleSignout} >sign out</div>
             </div>
        </div>

  ) 
}
export default Header