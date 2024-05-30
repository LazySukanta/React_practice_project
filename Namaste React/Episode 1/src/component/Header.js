import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatues = useOnlineStatus();
  const handleBtnClick = () => {
    setBtnName((prev) => {
      if (prev === "LogIn") return "LogOut";
      else return "LogIn";
    });
  };

  return (
    <div className="flex justify-between bg-green-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li className="px-4">
            Online Status:{onlineStatues ? "🤗" : "😱💔❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={handleBtnClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
