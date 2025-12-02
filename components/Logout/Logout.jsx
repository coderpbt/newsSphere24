'use client'
import { signOut } from "next-auth/react"

const Logout = () => {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div>
      <button className="bg-amber-700 rounded-[5px] py-1 px-4 text-white cursor-pointer" onClick={ () => {
            signOut({callbackUrl: baseUrl})
        }} >Log Out</button>
    </div>
  );
};

export default Logout;