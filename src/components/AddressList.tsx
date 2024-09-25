// components/AddressList.js

import { useState } from "react";
import AddAddressForm from "./AddAddressForm";
import Image from "next/image";

interface Address {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  isDefault: boolean;
}

interface AccountPageAllProps {
  ModeToggle: string;
}

export default function AddressList({ ModeToggle }: AccountPageAllProps) {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      name: "VIVEK KUMAR YADAV",
      phone: "9431903948",
      addressLine1: "kargaligate",
      addressLine2: "Bermo",
      city: "Bermo",
      state: "Jharkhand",
      postalCode: "829104",
      isDefault: true,
    },
  ]);

  const [editingAddressIndex, setEditingAddressIndex] = useState<number | null>(null);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleAddAddress = (newAddress: Address) => {
    if (newAddress.isDefault) {
      // Set all other addresses to non-default
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) => ({ ...address, isDefault: false }))
      );
    }

    if (editingAddressIndex !== null) {
      // Edit existing address
      const updatedAddresses = [...addresses];
      updatedAddresses[editingAddressIndex] = newAddress;
      setAddresses(updatedAddresses);
      setEditingAddressIndex(null);
    } else {
      // Add new address
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    }

    setShowForm(false);
    setEditingAddress(null); // Reset editingAddress when new address is added
  };

  const handleDeleteAddress = (index: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((_, i) => i !== index)
    );
  };

  const handleEditAddress = (index: number) => {
    setEditingAddressIndex(index);
    setEditingAddress(addresses[index]);
    setShowForm(true);
  };

  const handleNewAddress = () => {
    setEditingAddress(null); // Reset the form when adding a new address
    setShowForm(true);
  };

  return (
    <div>
      <h2
        className={`text-xl font-semibold rounded-md mb-4 font-serif border-2 p-2 ${
          ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
        }`}
      >
        My Addresses
      </h2>

      {addresses.length === 0 && !showForm && (
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
            onClick={handleNewAddress}
          >
            Add New Address
          </button>
        </div>
      )}

      {addresses.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {addresses.map((address, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg relative ${
                address.isDefault ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <div className="absolute top-2 right-2 text-sm">
                {address.isDefault && <span className="text-blue-600">DEFAULT</span>}
              </div>
              <div className="text-lg font-semibold">{address.name} (Home)</div>
              <div className="mt-2">{address.phone}</div>
              <div>{address.addressLine1}, {address.addressLine2}</div>
              <div>
                {address.city} {address.state} {address.postalCode}
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  className="text-blue-600"
                  onClick={() => handleEditAddress(index)}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={() => handleDeleteAddress(index)}
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!showForm && (
        <button
          className="p-2 mt-4 bg-orange-500 text-white rounded"
          onClick={handleNewAddress}
        >
          Add New Address
        </button>
      )}

      {showForm && (
        <AddAddressForm
          onAddAddress={handleAddAddress}
          editingAddress={editingAddress}
        />
      )}
    </div>
  );
}
