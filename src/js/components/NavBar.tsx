import React, { useState } from "react";
import { topbarMenuItems } from "../common";

interface NavBarProps {
  selectedMenu: any;
  setSelectedMenu: React.Dispatch<React.SetStateAction<any>>;
}

const NavBar: React.FC<NavBarProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <div className="w-full px-8 py-6 absolute top-0 flex justify-between">
      <div className="flex gap-2 items-center">
        <img src="../../icons/bird-icon.svg" alt="icon" />
        <div className="font-semibold text-2xl text-[#4A3500]">Bird's Eye</div>
      </div>
      <div className="flex gap-[60px]">
        {topbarMenuItems.map((menuItem) => (
          <button
            className="flex flex-col gap-1 items-center justify-center"
            onClick={() => setSelectedMenu(menuItem)}
          >
            <img
              src={
                selectedMenu.id === menuItem.id
                  ? menuItem.selectedIcon
                  : menuItem.icon
              }
              alt="menu-option"
            />
            <div
              className={`text-xs ${
                selectedMenu.id === menuItem.id
                  ? "font-semibold text-[#4A3500]"
                  : "font-normal text-[#A5A196]"
              }`}
            >
              {menuItem.title}
            </div>
          </button>
        ))}
      </div>
      <img src="../../icons/profile-pic.svg" alt="profile-pic" />
    </div>
  );
};

export default NavBar;
