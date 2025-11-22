import Link from "next/link";

const Navbar = async ({sideMenu}) => {
  console.log("sideMenu", sideMenu);
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
                <li><Link href="/login">Yeasin</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
            <ul className="flex items-center gap-2.5">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;