import { useState } from "react";
import sideImg from "../assets/images/Lg-sideImg.png";
import vivoLogo from "../assets/images/vivo_logo_blue.png";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
  };
  return (
    <div className="w-screen h-screen sm:bg-[url('/LoginPageBg.png')] bg-[url('/LoginPageBgM.png')] bg-cover flex items-center">
      <div className="w-[50%] sm:flex justify-center items-center hidden">
        <div className="w-full flex justify-center items-center">
          <img src={sideImg} className="w-[40%]" alt="Side Image" />
        </div>
      </div>
      <div className="sm:w-[50%] w-full flex justify-center items-center">
        <div className="bg-white/80 p-[6%] rounded-md backdrop-blur-[2px]">
          <div className="m-[6%] pb-[20%] flex justify-center">
            <img src={vivoLogo} alt="Vivo Logo" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between border-b-2 sm:w-[20vw] m-4">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="outline-none w-[90%] p-1"
                  placeholder="Username"
                />
                <FaUser />
              </div>
              <div className="flex items-center justify-between border-b-2 sm:w-[20vw] m-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none w-[90%] p-1"
                  placeholder="Password"
                />
                <FaLock />
              </div>
              <div className="mt-14 flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 transition-colors text-white py-2 px-8 rounded-md cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
