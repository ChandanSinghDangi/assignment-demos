import React from "react";
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";


function App() {



  return (

    <div className="min-h-screen bg-zinc-300 p-6 flex flex-col items-center gap-10">

      <Navbar />
    
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Project Management Dashboard
      </h1>

      <Outlet />

    </div>

  );
}

export default App;
