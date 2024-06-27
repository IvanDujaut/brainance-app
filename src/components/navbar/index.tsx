import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../shared/mode-toggle";

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-3 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter">
        {/* <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        /> */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-grandis">
          BrAInance
        </h1>
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li>Home</li>
        <li>Pricing</li>
        <li>News Room</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <div className="flex gap-3">
        <div className="flex items-center justify-center flex-col gap-8">
          <ModeToggle />
        </div>
        <Link href="/dashboard" className="bg-orange px-4 py-2 rounded-sm text-white hover:bg-primary/90">
          Free Trial
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
