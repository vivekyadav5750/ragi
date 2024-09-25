"use client"; // Deno Deploy directive
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing arrow icons

export default function RagiInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-green-50 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-700 uppercase font-serif">
            Ragi (रागी या मड़ुआ)
          </h2>
          <button onClick={toggleParagraph} className="text-green-700">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isOpen && (
          <p className="mt-4 text-gray-700 text-justify tracking-wider ">
            Ragi, also known as <strong>finger millet</strong> (<b>मड़ुआ</b>), is a highly
            nutritious grain, much like wheat (<b>गेहूं</b>). Just as we use wheat to
            make flour (<b>गेहूं का आटा</b>), ragi can also be ground into flour
            (<b>रागी का आटा</b>) and used to make a variety of dishes such as rotis,
            parathas, idlis, and porridge. Ragi flour is packed with essential
            nutrients such as calcium, iron, and fiber, making it a healthier
            option for those who want to incorporate more nutrition into their
            daily meals. This gluten-free flour is especially beneficial for
            bone health and is suitable for people with gluten sensitivity.
          </p>
        )}
      </div>
    </div>
  );
}
