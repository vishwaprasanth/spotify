"use client";

import React, { useMemo } from "react"
import { FaHeart, FaSpotify, FaUser, FaUsers } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"
import Box from "./Box"
import { FaHome, FaSearch } from "react-icons/fa"
import { usePathname } from "next/navigation"
import SideBarItem from "./SideBarItem"
import RightBar from "./RightBar";
import Button from "./Button";
import { BsMusicNoteList } from "react-icons/bs";
import Link from "next/link";
import { GiImbricatedArrows, GiImperialCrown } from "react-icons/gi";

interface MainContainerProps{
    children : React.ReactNode
}

const MainContainer : React.FC<MainContainerProps>= ({children}) => {

  const pathName  = usePathname()

  const routes = useMemo(() => [
    {
      icon : FaHome,
      label : "Home",
      active : pathName === "/",
      href : "/"
    },
    {
      icon : FaSearch,
      label : "Search",
      active : pathName === "/search",
      href : "/search"
    },
    {
      icon : FaHeart,
      label : "Favourites",
      active : pathName === "/favourites",
      href : "/favourites"
    }
  ], [pathName])
  return (
    <div className={twMerge(`flex h-full backdrop-blur-md bg-black/50`,"")}>
     {/* left */}
        <div className="flex h-full flex-col backdrop-blur-sm">
          <div className="w-100 flex items-center gap-3 px-4 py-6">
            <FaSpotify className="text-4xl"/>
            <p className="hidden md:block text-xl font-semibold">Spotify</p>
          </div>

          {/* routes */}
          <div className="hidden md:flex flex-col gap-y-2 w-[300px] h-full">
            <Box>
              <div className="flex flex-col gap-y-4 py-4 px-4">
                {routes.map(item=>(
                  <SideBarItem key={item.label} {...item}/>
                )

                )}
              </div>
            </Box>
          </div>

          <div className="flex md:hidden transition flex-col items-cneter justify-center">
            <Box>
              <div className="flex flex-col gap-y-4 py-4 px-4">
                {routes.map(item=>(
                  <SideBarItem key={item.label} {...item}/>
                )

                )}
              </div>
            </Box>
          </div>

        </div>
     {/* main */}
        <main className="flex-1 overflow-y-auto py-6">{children}</main>
     {/* right */}
        <RightBar>
          {/* user profile */}
          <div className="w-12 h-12 rounded-full bg-neutral-600 cursor-pointer flex items-center justify-center relative">
            {/* image of the authenticated user or the first letter */}
          </div>

          <Button>
                  <FaUser size={20} className="text-black"/>
          </Button>

          {/* admin actions */}
          <Link 
            href={"/artists"} className="bg-transparent placeholder-zinc-200 py-2">
                  <FaUsers size={20} className="text-neutral-400 text-2xl"/>
          </Link>

          <Link 
            href={"/songs"} className="bg-transparent placeholder-zinc-200 py-2">
                  <BsMusicNoteList size={20} className="text-neutral-400 text-2xl"/>
          </Link>

          {/* premium users */}
          <div className="flex flex-col item-center justify-center mt-auto gap-y-2 relative">
            <GiImperialCrown size={24} className="text-white"/>
            <p className="whitespace-nowrap text-neutral-400 font-normal text-lg">Go <span className="text-white">Pro</span></p>
          </div>
        </RightBar>
    </div>
  )
}

export default MainContainer