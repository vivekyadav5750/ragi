import React, { useState } from "react";
import { Input } from "./ui/input";
import TypingAnimation from "./magicui/typing-animation";
import { SearchCheck } from "lucide-react";
import Link from "next/link";

interface SearchBarProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  setIsSearchOpen,
  isSearchOpen,
  searchText,
  setSearchText,
}: SearchBarProps) {
  const Product_Categories = [
    { productId: "P001", productName: "Cookies" },
    { productId: "P002", productName: "Flour" },
    { productId: "P003", productName: "Ladoo" },
    { productId: "P004", productName: "Cake" },
    { productId: "P005", productName: "Namkeen" },
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { productId: string; productName: string }[]
  >([]);

  // Handle search input changes
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.length > 0) {
      const filtered = Product_Categories.filter((item) =>
        item.productName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle click on suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setSearchText(suggestion);
    setFilteredSuggestions([]);
    setIsSearchOpen(false); // Close the dropdown when a suggestion is clicked
    // make search box empty after click on suggestion
    setSearchText("");
  };

  return (
    <>
      <div className="relative flex justify-end items-center">
        <Input
          type="text"
          className="w-full sm:w-48 md:w-64 ml-2"
          onClick={() => setIsSearchOpen(true)}
          onChange={handleSearchInputChange}
          value={searchText}
        />
        <SearchCheck className="absolute z-10 right-2 cursor-pointer text-gray-400 hover:text-green-600" />
        {!isSearchOpen && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <TypingAnimation
              className="text-sm p-2 font-medium text-gray-500 dark:text-white font-mono tracking-widest"
              textArray={Product_Categories.map((item) => item.productName)} // Extract product names for typing animation
            />
          </div>
        )}
        {isSearchOpen && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 z-20 rounded-md shadow-lg">
            <ul className="divide-y divide-gray-200">
              {filteredSuggestions.map((suggestion) => (
                <li key={suggestion.productId} className="p-2 hover:bg-gray-100">
                  <Link
                    href={`/searchSuggestion/${suggestion.productId}`}
                    className="block w-full h-full"
                    onClick={() => handleSuggestionClick(suggestion.productName)}
                  >
                    {suggestion.productName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
