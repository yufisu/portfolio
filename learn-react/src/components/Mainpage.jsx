import React from "react";
import { BiPlus,BiLogoReact } from 'react-icons/bi';

const Mainpage = () => {
  return (
    <div className="main-page h-screen w-screen flex flex-row items-center justify-between">
      <div className="welcome-text text-6xl ml-24 h-96">
        <h1 className="text-white mt-12">Hello,</h1>
        <h1 className="text-white">I'm Yusuf Kerem,</h1>
        <h1 className="text-white selection:bg-fuchsia-300">doer of <em>things.</em></h1>
      </div>
      <div className="plus flex flex-1 h-32 justify-center">
        <BiPlus className="text-7xl text-white "/>
      </div>
      <div className="banner flex-1 flex justify-start h-48">
        <BiLogoReact className="text-[10rem] text-[#61DBFB]"/>
      </div>
    </div>
  )
}
export default Mainpage