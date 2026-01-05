import React from "react";
import Image from 'next/image'
import logo from "./logo.png";

export const Logo = ({ width, height, name }: { width: number, height: number, name: string }) => {
    return (
        <div className="px-0 flex justify-center h-16 relative">
          <div className="flex items-center relative z-10">
            <Image
                src={logo}
                width={width}
                height={height}
                alt="logo"
            />
              <span className="transition-opacity duration-300 ease-in-out text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {name}
              </span>

          </div>
        </div>
    );
}