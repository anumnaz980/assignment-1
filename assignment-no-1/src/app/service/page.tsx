"use client";

import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Service = () => {
  const  [ isDataLoading, setLoading] = useState(true);
  const color = "Green";
  
  useEffect(() => {
    const fetchData =  async () => {
       setLoading(true);
      setTimeout(() => {
        setLoading(false);
      },3000);
    };
    fetchData();
  },[])    
  if (isDataLoading){
    return (
    <div  className="flex items-center justify-center h-screen bg-pink-100">
      <ClipLoader
        color={color}
        loading={isDataLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    );
  }
  return (
    <div className='bg-green-200 h-screen'>
      <h1 className='text-5xl font-bold text-center p-10'>Our Services</h1>
      <ul className='text-center text-2xl text-blue-800 font-serif'>
        <li className='py-1'>Website Building</li>
        <li className='py-1'>App Interface design</li>
        <li className='py-1'>Mobile-Friendly websites</li>
        <li className='py-1'>Speed Optimization</li>
        <li className='py-1'>API Connections</li>
        <li className='py-1'>Bug Fixing</li>
        <li className='py-1'>SEO Setup</li>
        <li className='py-1'>Ongoing Support</li>
        <li className='py-1'>Web App Creation</li>
      </ul>
    </div>
  );
};

export default Service
