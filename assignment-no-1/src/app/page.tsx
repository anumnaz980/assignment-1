import Link from "next/link";
import Image from "next/image";
import { title } from "process";
export const metadata  = {
  title:"My Home Page"
}
export default function home(){
  return (
    <div className="bg-green-200 h-screen w-full py-36 px-36">
      <h1 className="text-7xl font-semibold pb-5">Hi! Welcome To My <span className="text-blue-600 font-serif ">Website..</span></h1>
      <h2 className="text-5xl">I am <span className="text-blue-600 font-serif ">Anum Naz</span></h2>
        <h1 className="text-7xl text-blue-600 font-semibold">Web Developer.</h1>
        <div className="">
          <button className="bg-pink-400 text-xl py-3 px-6 mt-4 rounded-xl hover:bg-pink-200"><Link href="/"></Link>My Services</button>
         </div>
  </div>
  )
  
}

