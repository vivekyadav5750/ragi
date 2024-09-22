// components/AddAddressForm.js

export default function AddAddressForm() {
  return (
    // <form className="mt-4 space-y-4 border-2 p-2">

    // </form>
    // make form section with first name, last name, email, phone number, address, city, state, zip code, country and submit button, in 2 columns
    <form className="mt-4 space-y-4 border-2 p-2">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="First Name"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Address"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="City"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="State"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Zip Code</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Zip Code"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Country"
          />
        </div>
      </div>
      <button className="p-2 mt-4 bg-blue-600 text-white rounded">
        Add Address
      </button>
    </form>
  );
}
