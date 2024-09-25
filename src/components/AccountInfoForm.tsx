interface AccountPageAllProps {
  ModeToggle: string;
}
export default function AccountInfoForm({ModeToggle} :AccountPageAllProps) {
  return (
    <div className="space-y-4">
      
      {/* Account information */}
      <div>
        <h2 className={`text-xl rounded-md font-semibold mb-4 font-serif border-2 p-2 ${ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"}`}>
          Account Information
        </h2>
        <form className="space-y-4 border-2 p-2">

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
                value='123@gmail.com'
                readOnly
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Phone Number"
                value={1234567890}
                readOnly
              />
            </div>
          </div>
          {/* <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Phone Number"
            />
          </div> */}
          <button type="submit" className="p-2 bg-blue-600 text-white rounded">
            Update
          </button>
        </form>
      </div>

      {/* change password section */}
      <div>
      <h2 className={`text-xl rounded-md font-semibold mb-4 font-serif border-2 p-2 ${ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"}`}>
          Change Password
        </h2>
        <form className="space-y-4 border-2 p-2">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Old Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                placeholder="Old Password"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                placeholder="New Password"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="p-2 bg-blue-600 text-white rounded">
            Change
          </button>
        </form>
      </div>
    </div>
  );
}
