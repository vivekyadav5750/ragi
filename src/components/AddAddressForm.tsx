// components/AddAddressForm.js

import { useState, useEffect } from "react";

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

interface AddAddressFormProps {
  onAddAddress: (address: Address) => void;
  editingAddress?: Address | null;
}

export default function AddAddressForm({
  onAddAddress,
  editingAddress,
}: AddAddressFormProps) {
  const [formData, setFormData] = useState<Address>({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    isDefault: false,
  });

  useEffect(() => {
    if (editingAddress) {
      setFormData(editingAddress);
    } else {
      resetForm(); // Clear form when adding new address
    }
  }, [editingAddress]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAddress(formData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      isDefault: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-2 rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">Address Line 1:</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">Address Line 2:</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="p-2 border w-full"
          />
        </div>
        <div>
          <label className="block">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleInputChange}
            />
            Set as Default Address
          </label>
        </div>
      </div>
      <button type="submit" className="p-2 mt-4 bg-blue-600 text-white rounded">
        {editingAddress ? "Save Changes" : "Add Address"}
      </button>
    </form>
  );
}
