"use client";

import { usePathname } from "next/navigation";
import { LogIn, Search, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignUpAndSignIn } from "./singUp";


export default function Navbar() {

    const pathname = usePathname();


    return (
        <nav className="top-0 w-full z-50 bg-white">
            <div className="flex justify-between items-center max-w-[1220px] mx-auto px-4 py-5">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={150} height={35} priority />
                </Link>
                <ul className="flex gap-8">
                    <Link className="text-[16px] font-medium text-[#3D3D3D] hover:text-[green]" href='/'><h2>Home</h2></Link>
                    <Link className="text-[16px] font-medium text-[#3D3D3D] hover:text-[green]" href='/'><h2>Shop</h2></Link>
                </ul>
                <div className="flex items-center gap-6">
                    <button className="cursor-pointer"><Search className="text-[24px]" /></button>
                    <button className="relative cursor-pointer">
                        <ShoppingCart className="text-[24px]" />
                    </button>
                    <button className="relative cursor-pointer">
                        <Heart className="text-[24px]" />
                    </button>

                  <SignUpAndSignIn/>



                </div>
            </div>
            <div className="max-w-[1240px] m-auto h-[2px] px-4">
                <hr className="bg-[#46A35880] border-none w-full h-[1px]" />
            </div>
        </nav>
    );
}
