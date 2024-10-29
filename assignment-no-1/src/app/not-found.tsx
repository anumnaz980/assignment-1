import Link from "next/link";
import React from "react";
export default function ErrorNotFound() {
    return (
      <div className="bg-green-200 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">Ooops..</h1>
        <h3 className="text-4xl font-serif text-black mb-4">Something Went  Wrong</h3>
        <p className="text-xl text-black mb-8">
          Sorry! This page does not exist.
        </p>
        <Link href="/" className="bg-gray-400 hover:bg-pink-400 text-white font-bold py-2 px-4 
        rounded-2xl">Go Back TO Home Page</Link>
      </div>
    );
  }
  
  