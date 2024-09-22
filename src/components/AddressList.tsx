interface AccountPageAllProps {
  ModeToggle: string;
}
import { useState } from "react";
import AddAddressForm from "./AddAddressForm";
import Image from "next/image";

export default function AddressList({ ModeToggle }: AccountPageAllProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2
        className={`text-xl font-semibold rounded-md mb-4 font-serif border-2 p-2 ${
          ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
        }`}
      >
        My Addresses
      </h2>
      {!showForm && (
        <div className="p-4 text-center items-center justify-center flex flex-col border-2">
          <Image
            src="/logo/no-address.jpg"
            alt="No order"
            width={200}
            height={200}
          />
          <p>No addresses found!</p>
          <button
            className="p-2 mt-4 bg-blue-600 text-white rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Add New Address"}
          </button>
        </div>
      )}
     
      {showForm && <AddAddressForm />}
    </div>
  );
}
