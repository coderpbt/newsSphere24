'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logout from './Logout/Logout' 

const MobileMenu = ({ navItems = [], session }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
       {/* Hamburger visible on md: hidden on md+ */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Slide-over / drawer */}
      <div
        className={`fixed inset-0 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Menu</h3>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* auth area */}
          <div className="mb-6">
            {session ? (
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-gray-800">{session.user?.name}</div>
                <Link href="/addpost" className="text-sm text-orange-600 hover:underline">Add Post</Link>
                {/* use your Logout component */}
                <div><Logout /></div>
              </div>
            ) : (
              <Link href="/login" className="inline-block bg-amber-700 rounded-md py-2 px-3 text-white text-sm font-medium">
                Become a Contributor
              </Link>
            )}
          </div>

          {/* nav links */}
          <nav>
            <ul className="flex flex-col gap-3">
              {navItems.map((nav) => (
                <li key={nav._id}>
                  <Link href={`/${nav.cname}`} onClick={() => setOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-orange-600"
                  >
                    {nav.cname}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* optional footer small links */}
          <div className="mt-8 border-t pt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} NewsSphere 24
          </div>
        </aside>
      </div>
    </>
  );
};

export default MobileMenu;