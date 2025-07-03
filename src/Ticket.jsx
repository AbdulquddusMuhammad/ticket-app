import img from "../public/images/logo-full.svg";
import img2 from "../public/images/image-avatar.jpg";
import img3 from "../public/images/icon-github.svg";
import React from "react";

const Ticket = ({ fullname, githubUsername, theImg }) => {
  return (
    <div className="w-auto xl:w-screen flex justify-center mt-[8vh]">
      <div className="relative flex flex-col justify-between w-500px min-h-[280px] w-[600px] bg-no-repeat bg-[url('../public/images/pattern-ticket.svg')] p-[2rem] [zoom:0.6] xl:[zoom:1]">
        <span className="absolute [align-self:anchor-center] right-[15px] opacity-[.3] rotate-90 text-[1.9rem]">
          #{Math.floor(Math.random() * 100000)}
        </span>
        <div className="" id="topText">
          <img src={img} alt="" />
          <span className="block ml-[50px] mt-[7px]">
            jan 31, 2025 / Austin, TX
          </span>
        </div>
        <div className="flex" id="bottom">
          <img src={theImg} className="rounded-[1rem] h-[6.5rem]" alt="" />
          <div className="ml-[15px] flex flex-col justify-between">
            <span className="text-[16px]">{fullname}</span>
            <span className="flex mt-[10px] text-[16px]">
              <img src={img3} className="" alt="" /> @{githubUsername}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
