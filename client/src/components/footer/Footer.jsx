"use client"
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
 
const Footer=()=>{
  return (
    <footer className="w-full bg-gray-200 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-1 text-center md:justify-around">
        <Image src="/main-logo.png" alt="main-logo.png" width={150} height={150} />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-bold text-[#123557]">
        &copy; {new Date().getFullYear()} AMBULAN
      </Typography>
    </footer>
  );
}

export default Footer