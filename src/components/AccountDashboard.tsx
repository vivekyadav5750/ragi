"use client";
import { useState } from "react";
import AccountInfoForm from "./AccountInfoForm";
import OrderHistory from "./orderHistory";
import AddressList from "./AddressList";
import Wishlist from "./Wishlist";
import { User } from "lucide-react";

interface AccountPageAllProps {
  ModeToggle: string;
}

export default function AccountDashboard({ ModeToggle }: AccountPageAllProps) {
  const [activeTab, setActiveTab] = useState("account");

  return (
    // <div className="container mx-auto p-4 ">
    //   <div className="flex space-x-4 ">
    //     {/* <div className="w-1/4 p-4 bg-gray-100 rounded-lg space-y-3"> */}
    //     <div
    //       className={`w-1/4 p-4 rounded-lg space-y-3 ${
    //         ModeToggle === "light" ? "bg-gray-100" : ""
    //       }`}
    //     >
    //       <div className="flex items-center space-x-4 border-t-2">
    //         <div
    //           className={`w-16 h-16 ${
    //             ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
    //           } rounded-full flex justify-center items-center`}
    //         >
    //           <User size={32} />
    //         </div>
    //         <div>
    //           <h2 className="text-lg font-semibold">Vivek Kumar Yadav</h2>
    //           <p className="text-sm text-gray-600">+91 1234567890</p>
    //         </div>
    //       </div>

    //       {/* ADD BORDER IN LIST */}
    //       <ul className="space-y-2 border-t-2">
    //         <li>
    //           <button
    //             // className={`w-full text-left p-2 rounded ${
    //             //   activeTab === "account" ? "bg-gray-500" : ""
    //             // }`}
    //             className={`w-full text-left p-2 rounded ${
    //               activeTab === "account"
    //                 ? ModeToggle === "dark"
    //                   ? "bg-gray-500"
    //                   : "bg-gray-200"
    //                 : ""
    //             }`}
    //             onClick={() => setActiveTab("account")}
    //           >
    //             Account Information
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             className={`w-full text-left p-2 rounded ${
    //               activeTab === "orders"
    //                 ? ModeToggle === "dark"
    //                   ? "bg-gray-500"
    //                   : "bg-gray-200"
    //                 : ""
    //             }`}
    //             onClick={() => setActiveTab("orders")}
    //           >
    //             Order History
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             className={`w-full text-left p-2 rounded ${
    //               activeTab === "addresses"
    //                 ? ModeToggle === "dark"
    //                   ? "bg-gray-500"
    //                   : "bg-gray-200"
    //                 : ""
    //             }`}
    //             onClick={() => setActiveTab("addresses")}
    //           >
    //             Addresses
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             className={`w-full text-left p-2 rounded ${
    //               activeTab === "wishlist"
    //                 ? ModeToggle === "dark"
    //                   ? "bg-gray-500"
    //                   : "bg-gray-200"
    //                 : ""
    //             }`}
    //             onClick={() => setActiveTab("wishlist")}
    //           >
    //             Wishlist
    //           </button>
    //         </li>
    //         <li>
    //           <button className="w-full text-left p-2 rounded">Logout</button>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="w-3/4 p-4  rounded-lg shadow">
    //       {activeTab === "account" && <AccountInfoForm ModeToggle={ModeToggle} />}
    //       {activeTab === "orders" && <OrderHistory ModeToggle={ModeToggle} />}
    //       {activeTab === "addresses" && <AddressList ModeToggle={ModeToggle} />}
    //       {activeTab === "wishlist" && <Wishlist ModeToggle={ModeToggle} />}
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div
          className={`w-full md:w-1/4 p-4 rounded-lg space-y-3 ${
            ModeToggle === "light" ? "bg-gray-100" : ""
          }`}
        >
          <div className="flex items-center space-x-4 border-t-2">
            <div
              className={`w-16 h-16 ${
                ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
              } rounded-full flex justify-center items-center`}
            >
              <User size={32} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Vivek Kumar Yadav</h2>
              <p className="text-sm text-gray-600">+91 1234567890</p>
            </div>
          </div>

          <ul className="space-y-2 border-t-2">
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeTab === "account"
                    ? ModeToggle === "dark"
                      ? "bg-gray-500"
                      : "bg-gray-200"
                    : ""
                }`}
                onClick={() => setActiveTab("account")}
              >
                Account Information
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeTab === "orders"
                    ? ModeToggle === "dark"
                      ? "bg-gray-500"
                      : "bg-gray-200"
                    : ""
                }`}
                onClick={() => setActiveTab("orders")}
              >
                Order History
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeTab === "addresses"
                    ? ModeToggle === "dark"
                      ? "bg-gray-500"
                      : "bg-gray-200"
                    : ""
                }`}
                onClick={() => setActiveTab("addresses")}
              >
                Addresses
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeTab === "wishlist"
                    ? ModeToggle === "dark"
                      ? "bg-gray-500"
                      : "bg-gray-200"
                    : ""
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                Wishlist
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 rounded">Logout</button>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/4 p-4 rounded-lg shadow">
          {activeTab === "account" && <AccountInfoForm ModeToggle={ModeToggle} />}
          {activeTab === "orders" && <OrderHistory ModeToggle={ModeToggle} />}
          {activeTab === "addresses" && <AddressList ModeToggle={ModeToggle} />}
          {activeTab === "wishlist" && <Wishlist ModeToggle={ModeToggle} />}
        </div>
      </div>
    </div>
  );
}
