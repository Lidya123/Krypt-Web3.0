import React from "react";

import logo from "../assets/images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-20" style={{width:"230px", height:"70px"}}/>
    </div>
    <div className="flex justify-center items-center flex-col mt-1">
      <p className="text-white text-sm text-center font-medium mt-2">@krypt_web3.0.com</p>
    </div>

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-1">
      <p className="text-white text-xs">Team : &nbsp; Lidya (8880) &nbsp; Jayesh (8853) &nbsp; Prachi (8888)</p>
      <p className="text-white text-xs">Blockchain Mini Project 2022</p>
    </div>
  </div>
);

export default Footer;