import React from "react";

export default function About() {
  return (
    <div className="flex w-full h-4/5 items-center justify-evenly">
      <AboutText />
      <AboutImage />
    </div>
  );
}

function AboutText() {
  return (
    <div>
      <h1 className="text-[60px]">Hero Title</h1>
      <h5 className="text-[35px]">Hero SubTitle</h5>
      <p className="text-[20px] w-[320px] text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quisquam porro voluptas provident dicta quibusdam excepturi maiores explicabo corrupti nostrum nam vel, alias consectetur? Harum?</p>
    </div>
  );
}

function AboutImage() {
  return (
    <>
    <div className="w-80 h-80 bg-slate-400" />
    </>
  )
}