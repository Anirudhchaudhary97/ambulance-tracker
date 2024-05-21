
//  'use client'
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-blue-600 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">
//           <a href="/">Ambulance Tracker</a>
//         </div>

//         {/* Menu Items */}
//         <div className="hidden md:flex space-x-4">
//           <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
//           <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
//           <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
//           <a href="/track" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Track Ambulance</a>
//           <a href="/book" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Book Ambulance</a>
//           <a href="/profile" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Profile</a>
//           <a href="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Login</a>
//           <a href="/logout" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Logout</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden">
//           <a href="/" className="block text-white px-4 py-2 hover:bg-blue-700">Home</a>
//           <a href="/about" className="block text-white px-4 py-2 hover:bg-blue-700">About</a>
//           <a href="/contact" className="block text-white px-4 py-2 hover:bg-blue-700">Contact</a>
//           <a href="/track" className="block text-white px-4 py-2 hover:bg-blue-700">Track Ambulance</a>
//           <a href="/book" className="block text-white px-4 py-2 hover:bg-blue-700">Book Ambulance</a>
//           <a href="/profile" className="block text-white px-4 py-2 hover:bg-blue-700">Profile</a>
//           <a href="/login" className="block text-white px-4 py-2 hover:bg-blue-700">Login</a>
//           <a href="/logout" className="block text-white px-4 py-2 hover:bg-blue-700">Logout</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;













"use client"

import React from "react";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


 const NavBar=()=> {
  const [isMenuOpen, setIsMenuOpen] =useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-white text-black p-4 shadow-md"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
         
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
        <Button as={Link}  href="#" variant="flat" className="bg-[#920B3A] text-white font-bold">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat"  className="bg-[#920B3A] text-white font-bold">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
 export default NavBar