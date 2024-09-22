import Image from "next/image";

interface AccountPageAllProps {
  ModeToggle: string;
}
export default function Wishlist({ ModeToggle }: AccountPageAllProps) {
  return (
    <div>
      <h2
        className={`text-xl font-semibold rounded-md mb-4 font-serif border-2 p-2 ${
          ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
        }`}
      >
        My Wishlist
      </h2>
      <div className="p-4 text-center items-center justify-center flex flex-col border-2">
        <Image
          src="/logo/no-whislist.jpg"
          alt="No order"
          width={200}
          height={200}
        />
        <p>Your wishlist is empty!</p>
        {/* <button className="p-2 mt-4 bg-blue-600 text-white rounded">
          Shop Now
        </button> */}
        {/* add button and add link to it /shop */}
        
        <button className="p-2 mt-4 bg-blue-600 text-white rounded">
          <a href="/shop">Shop Now</a>
        </button>
        

      </div>
    </div>
  );
}
