/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center lg:justify-evenly items-center py-10">
      <div className="flex flex-col gap-4 items-center">
        <div
          className="
        lg:w-[700px]
        md:w-[400px]

        lg:text-5xl 
        w-[350px]  
        text-[1.50rem]
        "
        >
          <p>
            Transformamos ideias em realidade digital. Somos uma equipe
            apaixonada por desenvolvimento web, fornecendo soluções
            personalizadas e inovadoras para impulsionar o sucesso online dos
            nossos clientes.
          </p>
        </div>
        <div className="w-full flex justify-end px-10 text-lg lg:text-2xl">
          <button className="bg-[--primary] hover:border-black hover:border-2 text-white rounded-md px-5 py-1">
            entre em contato!
          </button>
        </div>
      </div>
      <div
        className=" 
      xl:w-[500px] xl:h-[500px] 
      md:flex hidden  bg-[--primary] 
      w-[300px] h-[300px]
      rounded-full  justify-center items-center"
      >
        <Image
          className="rounded-full"
          alt="Logo TVR Web"
          src="/TaveiraProfile.png"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
