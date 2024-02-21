"use client";

import Image from "next/image";
import pic from "@/public/images/pro-pic3.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { Metadata } from "next";
// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "b" }, { name: "c" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* <Link href="/users">Users</Link>
      <ProductCard /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="react pic"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "....",
//   };
// }
