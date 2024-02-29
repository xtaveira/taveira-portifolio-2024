import { Slider } from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 gap-5 bg-[#d9d9d9]">
      <div className="w-[90%] border-b-2 border-black text-5xl py-3">
        Projects
      </div>
      <div className="w-[90%] border-black border-2 rounded-lg h-[500px] flex flex-col justify-center items-evenly mt-10">
        <div className="w-[90%]">
            Container Projetos
        </div>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
        //   getAriaValueText={}
        //   valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </div>
    </section>
  );
};

export default Projects;
