interface AccountPageAllProps {
  ModeToggle: string;
}
import Image from "next/image";

export default function OrderHistory({ ModeToggle }: AccountPageAllProps) {
  return (
    <div>
      <h2
        className={`text-xl font-semibold rounded-md mb-4 font-serif border-2 p-2 ${
          ModeToggle === "light" ? "bg-gray-200" : "bg-gray-400"
        }`}
      >
        My Orders
      </h2>
      <div className="p-4 text-center items-center justify-center flex flex-col border-2">
        {/* add img of no order found, /logo/no-order.webp */}
        <Image
          src="/logo/no-order.webp"
          alt="No order"
          width={200}
          height={200}
        />
        <p>No orders found!</p>
        <button className="p-2 mt-4 bg-blue-600 text-white rounded">
        <a href="/shop">Shop Now</a>
        </button>
      </div>
    </div>
  );
}
