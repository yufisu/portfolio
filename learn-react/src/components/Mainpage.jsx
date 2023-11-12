import React from "react";

const Mainpage = () => {
  return (
    <div className="main-page h-screen flex flex-row items-center">
      <div className="welcome-text text-6xl ml-24 h-96">
        <h1 className="text-white mt-12">Hello,</h1>
        <h1 className="text-white">I'm Yusuf Kerem,</h1>
        <h1 className="text-white selection:bg-fuchsia-300">doer of <em>things.</em></h1>
      </div>
      <div className="banner"></div>
    </div>
  )
}
export default Mainpage