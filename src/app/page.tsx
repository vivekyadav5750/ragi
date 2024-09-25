// import Image from "next/image";
import Home_Product from "@/components/home-product";
import Example from "../components/slide";
import Home_Benefits from "@/components/home-benefits";
import RagiInfo from "@/components/RagiInfo";
// import Hoverdiv from "@/components/hoverdiv";
export default function Home() {
  return (
    <>
      <main className="m-8">
        <Example />
        <RagiInfo/>
        <Home_Benefits />
        <Home_Product />  
        {/* <Hoverdiv /> */}
      </main>
    </>
  );
}
