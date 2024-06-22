"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { GenIcon } from "react-icons";
import { CgProfile } from "react-icons/cg";
import sideBarItems from "@/config/sideBarItems.json";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { setLoginDetails } from "@/redux/reducerSlices/userSlice";

export const ItemCounter = ({ number }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <GenIcon />
  </div>
);

export const IconWrapper = ({ children, className }) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);
export default function SideBar() {
  console.log('sideBarItems:', sideBarItems);
  const router = useRouter();
  const { userDetails } = useSelector((state) => state.user);


   //  defensive check to ensure data is available
   if (!userDetails || !userDetails.role || !sideBarItems[userDetails.role]) {
    return null; // or render a loading spinner, fallback UI, etc.
  }

  return (
    <Listbox
      aria-label="User Menu"
      onAction={(key) => router.push(key)}
      className={`p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80  bg-green-500 max-w-[600px] text-white overflow-visible shadow-small rounded-medium m-2`}
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      { sideBarItems[userDetails?.role].map((item) => {
        return (
          <ListboxItem
            key={item.link}
            startContent={
              <IconWrapper className="bg-success/10 text-success bg-white">
                <CgProfile />
              </IconWrapper>
            }
          >
            {item.name}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
