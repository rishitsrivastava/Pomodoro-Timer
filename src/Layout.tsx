//this file is just to set the layout that we have just set, this project will not contain any functionality for now.
import React from 'react'

const Layout: React.FC = () => {

    return <div className="flex flex-col h-screen justify-center items-center bg-black text-white">
    {/* <!-- Header --> */}
    <header className="text-center border-b border-white">
      <h1 className="text-3xl">Pomodoro Timer</h1>
    </header>
  
    {/* <!-- Timer Display and Buttons --> */}
    <div className="flex flex-col items-center mt-10">
      {/* <!-- Timer --> */}
      <div className="w-64 h-40 flex justify-center items-center border-2 border-white rounded-lg mb-8">
        <h2 className="text-4xl">00:00</h2>
      </div>
  
      {/* <!-- Buttons (Start, Break, Restart) --> */}
      <div className="flex space-x-4">
        {/* <!-- Start/Pause Button --> */}
        <button className="w-24 h-12 border-2 border-white rounded-lg hover:bg-gray-700">Start</button>
        
        {/* <!-- Break Button --> */}
        <button className="w-24 h-12 border-2 border-white rounded-lg hover:bg-gray-700">Break</button>
  
        {/* <!-- Restart Button --> */}
        <button className="w-12 h-12 border-2 border-white rounded-lg hover:bg-gray-700"></button>
      </div>
    </div>
  
    {/* <!-- Right-side Time Selection (30 mins, 60 mins, 90 mins) --> */}
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col space-y-4">
        {/* <!-- 30 Mins Button --> */}
        <button className="w-24 h-12 border-2 border-white rounded-lg hover:bg-gray-700">30 mins</button>
  
        {/* <!-- 60 Mins Button --> */}
        <button className="w-24 h-12 border-2 border-white rounded-lg hover:bg-gray-700">60 mins</button>
  
        {/* <!-- 90 Mins Button --> */}
        <button className="w-24 h-12 border-2 border-white rounded-lg hover:bg-gray-700">90 mins</button>
      </div>
    </div>
  </div>
  
}


export default Layout;