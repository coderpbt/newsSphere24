import { auth } from "@/auth";
import Link from "next/link";
import Logout from "./Logout/Logout";
import { getAllCategory } from "@/database/queries";

const Navbar = async ({sideMenu}) => {
 const session = await auth();
 const navBar = await getAllCategory();
 
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2.5">
          <div>
            <Link className="font-bold text-4xl" href="/">NewsSphere 24</Link>
          </div>
          <nav>
            <div>
            <ul className="flex items-center gap-2.5 justify-end">
                <li>
                  {session ? (
                    <div className="flex items-center gap-1.5">
                      <span className="mx-1">{session.user?.name}</span>
                      <span>|</span>
                      <Logout />
                    </div>
                  ) : (
                    <Link href="/login" className="login">Login</Link>
                  )}
                </li>
              </ul>


            </div>
            <ul className="flex items-center gap-4">
              {
                navBar?.map((nav)=>
                   <li className="font-medium" key={nav._id}><Link href={nav.cname}>{nav.cname}</Link></li>
                )
              }
             
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;