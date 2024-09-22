// import Image from "next/image";
import Home_Product from "@/components/home-product";
import Example from "../components/slide";
import Home_Benefits from "@/components/home-benefits";
// import Hoverdiv from "@/components/hoverdiv";
export default function Home() {
  return (
    <>
      <main className="m-8">
        <Example />
        <Home_Benefits />
        <Home_Product />  
        {/* <Hoverdiv /> */}
      </main>
    </>
  );
}
