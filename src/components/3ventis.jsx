import React from "react";
import logo from "../assets/images/3ventis.png";


export default function VentisLogo({clr="black"}) {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="3ventis logo" className="size-12" />
      <span style={{color:clr}} className="text-[2rem] font-semibold ">3ventiz</span>
    </div>
  );
}
