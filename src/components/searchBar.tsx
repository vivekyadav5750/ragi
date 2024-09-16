import React from "react";
import { Input } from "./ui/input";
import TypingAnimation from "./magicui/typing-animation";
import { SearchCheck } from "lucide-react";

interface SearchBarProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar( { setIsSearchOpen, isSearchOpen,searchText, setSearchText }: SearchBarProps) {
  const Product_Categories = ["Cookies...", "Flour...", "Cake...", "Ladoo..."];
  
  return (
    <>
      <div className="relative flex justify-end items-center">
        <Input type="text"  className="w-full sm:w-48 md:w-64 ml-2" onClick={() => setIsSearchOpen(true)} onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
        <SearchCheck className="absolute z-10 right-2 cursor-pointer text-gray-400 hover:text-green-600" />
        {!isSearchOpen && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <TypingAnimation
              className="text-sm p-2 font-medium text-gray-500 dark:text-white font-mono tracking-widest"
              textArray={Product_Categories}
            />
          </div>
        )}
      </div>
    </>
  );
}
