
"use client"

import React from "react";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";


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
            <Image src="/main-logo.png" alt="main-logo" width={120} height={120}/>
          {/* <p className="font-bold text-inherit">AMBULAN</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
        <Image src="/main-logo.png" alt="main-logo" width={150} height={150}/>
          {/* <p className="font-bold text-inherit">AMBULAN</p> */}
        </NavbarBrand>
        <NavbarItem isActive>
          <Link  href="#" aria-current="page" className="text-[#10324A] font-bold text-xl">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#"  color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Service
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button  variant="flat"  className="bg-[#920B3A] text-white font-bold">
            Book Now
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex ">
      <Link href="/login"><Button variant="flat" className="bg-[#920B3A] text-white font-bold">
            Login
          </Button> </Link> 
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