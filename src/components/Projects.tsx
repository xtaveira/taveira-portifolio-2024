import { Slider } from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 gap-5 bg-[#d9d9d9]">
      <div className="w-[90%] border-b-2 border-black text-5xl py-3">
        Projects
      </div>
      <div className="w-[90%]  rounded-lg h-[500px] flex flex-col justify-between items-center  mt-10 py-10">
        <div className="w-[90%] h-full flex justify-center">
          <div className="w-[70%] border-2 border-red-500 h-[80%] flex justify-between flex-col items-center py-10">
            <div>image</div>
            <h4>project title</h4>
          </div>
        </div>
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
        />
      </div>
    </section>
  );
};

export default Projects;
