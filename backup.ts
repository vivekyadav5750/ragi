<ul>
            <li
              className={`py-2 cursor-pointer ${activeTab === "account" && "font-bold"}`}
              onClick={() => setActiveTab("account")}
            >
              My Account
            </li>
            <li
              className={`py-2 cursor-pointer ${activeTab === "orders" && "font-bold"}`}
              onClick={() => setActiveTab("orders")}
            >
              Order History
            </li>
            <li
              className={`py-2 cursor-pointer ${activeTab === "addresses" && "font-bold"}`}
              onClick={() => setActiveTab("addresses")}
            >
              My Addresses
            </li>
            <li
              className={`py-2 cursor-pointer ${activeTab === "wishlist" && "font-bold"}`}
              onClick={() => setActiveTab("wishlist")}
            >
              My Wishlist
            </li>
            <li className="py-2 cursor-pointer">Logout</li>
          </ul>