"use client";
import {
  ChartNoAxesColumnDecreasing,
  LogIn,
  ShoppingBag,
  UserRoundPen
} from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { useState } from "react";
import HyperText from "./magicui/hyper-text";
import SearchBar from "./searchBar";

export default function Navbar() {
  const NAV_ITEMS = [
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Categories", path: "/categories" },
    { title: "Help/Contact", path: "/contact" }
  ];

  const [user, setUser] = useState(1);
  // console.log(setUser);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleOuterClickSearchOpen = () => {
    console.log("object click");
    console.log("value of search text", searchText);
    if (isSearchOpen && searchText === "") {
      setIsSearchOpen(false);
    }
  };
  return (
    <>
      <nav
        className="from-background/10 via-background/50 to-background/80  top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between  border-b bg-gradient-to-b px-4 backdrop-blur-xl fixed"
        onClick={() => handleOuterClickSearchOpen()}
      >
        {/* left side logo and RAGI MART */}
        <div className=" flex space-x-2  justify-center items-center ">
          <div>
            <Link href={"/"}>
              <ShoppingBag />
            </Link>
          </div>
          <div className="flex items-center ">
            <Link href={"/"}>
              {/* <span className="ml-2 text-sm font-semibold  hover:font-bold hover:bg-gray-100 ">
                RAGI MART
              </span> */}
              <HyperText
                className="text-base md:ml-1 font-semibold font-mono text-black dark:text-white cursor-pointer"
                text="RAGI MART"
                duration={800}
              />
            </Link>
          </div>
        </div>

        {/* large and medium screen nav items  */}
        <div className="hidden md:flex items-center space-x-4 mx-2">
          {NAV_ITEMS.map((item) => (
            <Link key={item.title} href={item.path}>
              <span className="text-sm font-medium transition duration-300 ease-in-out   hover:text-base ">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* right side login, mode toggle and search bar */}
        <div className="flex items-center justify-end space-x-2 ">
          {/* SearchBar with Typing Animation */}
          <SearchBar
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          {/* Login Button */}
          {!user ? (
            <div>
              <Button asChild className="hidden md:flex">
                <Link href={"/login"}>
                  <LogIn className="mr-2" size={14} />
                  Login
                </Link>
              </Button>
            </div>
          ) : (
            <div className="md:flex items-center justify-center space-x-2">
              <Button asChild className="hidden md:flex">
                <Link href={"/profile"}>
                  <UserRoundPen className="mr-2" size={14} />
                  Profile
                </Link>
              </Button>

              <Link href={"/cart"} className="flex">
                <ShoppingBag className="mr-2" size={24} />
              </Link>
            </div>
          )}

          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ChartNoAxesColumnDecreasing className="-rotate-90 md:hidden" />
          </div>
        </div>
      </nav>

      {/* for small screen   */}  {/* // on click any button make false ismenuopen*/}
      {/* // make nav on isMenuOpen, open box with crossmark to close it */}
      <div
        className={`fixed top-16 left-0 w-full h-full bg-background/90 backdrop-blur-xl z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center mt-8  h-full space-y-4">
          {/* right side cross mark <Plus /> */}
          <div
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChartNoAxesColumnDecreasing className="rotate-45" />
          </div>

          {NAV_ITEMS.map((item) => (
            <Link key={item.title} href={item.path} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="text-xl font-medium hover:text-slate-500 ">
                {item.title}
              </span>
            </Link>
          ))}

          {!user ? (
            <div>
              <Button asChild className="">
                <Link href={"/login"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <LogIn className="mr-2" size={14} />
                  Login
                </Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Button asChild className="">
                <Link href={"/profile"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <UserRoundPen className="mr-2" size={14} />
                  Profile
                </Link>
              </Button>

              <Button asChild className="">
                <Link href={"/cart"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <ShoppingBag className="mr-2" size={14} />
                  Cart
                </Link>
              </Button>
            </div>
          )}

          <div className="flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ModeToggle />
          </div>

        </div>
      </div>
    </>
  );
}
