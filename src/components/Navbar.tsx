import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-5 sm:px-10 md:justify-end items-center justify-center gap-10">
      <div className="md:hidden flex bg-[--primary] rounded-lg items-center w-[3rem] h-[3rem]">
        <Image
          className="rounded-full"
          alt="Davi Taveira Profile"
          src="/LogoPNG.svg"
          width={500}
          height={500}
        />
      </div>
      <div>
        <a href="">sobre</a>
      </div>
      <div>projetos</div>
      <div>contato</div>
    </nav>
  );
};

export default Navbar;
