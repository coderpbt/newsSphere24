
import { auth } from "@/auth";
import Link from "next/link";
import Logout from "./Logout/Logout";
import { getAllCategory } from "@/database/queries";
import MobileMenu from "./MobileMenu"; // make sure path is correct

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  const navBar = await getAllCategory(); // ensure this returns plain objects

  return (
     <header className="bg-white border-b border-b-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Left brand */}
          <div>
            <Link className="font-bold text-[30px]" href="/">NewsSphere 24</Link>
          </div>

          {/* Desktop nav (hidden on small screens) */}
          <nav className="hidden md:block">
            <div className="mb-2.5">
              <ul className="flex items-center gap-2.5 justify-end">
                <li>
                  {session ? (
                    <div className="flex items-center gap-1.5">
                      <span className="mx-1 text-[18px] font-medium">{session.user?.name}</span>
                      <span>|</span>
                      <Link href="/addpost" className="font-medium text-[17px] hover:underline">Add Post</Link>
                      <span>|</span>
                      <Logout />
                    </div>
                  ) : (
                    <Link href="/login" className="login bg-amber-700 rounded-[5px] py-1 px-4 text-white cursor-pointer">Become a Contributor</Link>
                  )}
                </li>
              </ul>
            </div>

            <ul className="flex items-center gap-4">
              {
                navBar?.map((nav) =>
                  <li className="font-medium text-[17px] hover:underline" key={nav._id}>
                    <Link href={`/${nav.cname}`}>{nav.cname}</Link>
                  </li>
                )
              }
            </ul>
          </nav>

          {/* Mobile: hamburger and MobileMenu component (visible on md-) */}
          <div className="md:hidden flex items-center">
            <MobileMenu navItems={navBar} session={session} />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
