"use client"

import projects from "@/app/db/projects";
import { Slider } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";



const Projects = () => {


  const [project, setProject] = useState(0)

  return (
    <section className=" w-full flex flex-col justify-center items-center py-10 gap-5 bg-[#d9d9d9]">
      <div className="w-[90%] border-b-2 border-black text-5xl py-3">
        Projects
      </div>
      <div className="w-[90%]  rounded-lg flex flex-col justify-between items-center mb-5">
        <div className="w-[90%] h-full flex justify-center  my-4">
          <div className="w-[70%]  h-[100%] flex justify-between flex-col items-center my-10 gap-5 cardProject">
            <div className="flex justify-center items-center  w-[90%] h-[100%]  ">
              <Image className="w-[50%] h-auto rounded-lg"
                src={projects[project].src}
                width={400}
                height={400}
                alt="Imagem do Projeto"
              />
            </div>
            <div className="items-center  w-full justify-center h-full flex flex-col gap-3">
              <h2 className="font-bold text-lg">{projects[project].title}</h2>
              <p>{projects[project].description}</p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">

          <Slider
            aria-label="Temperature"
            defaultValue={1}
            step={1}
            marks
            min={1}
            max={5}
            sx={{
              color: "black",
            }}
            onChange={(e) => {
              const target = e.target as any;
              if (target.value != null) {
                console.log(target.value);
                setProject(target.value - 1);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
