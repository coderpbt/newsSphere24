'use client'
import { signOut } from "next-auth/react"

const Logout = () => {
  return (
    <div>
      <button onClick={ () => {
            signOut({callbackUrl: "http://localhost:3000/"})
        }} >Log Out</button>
    </div>
  );
};

export default Logout;