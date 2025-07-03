import React from "react";
import Ticket from "./Ticket";

const PreviewTicket = ({ fullname, email, githubUsername, theImg }) => {
  return (
    <div className="h-screen w-[90vw] xl:w-screen">
      <span className="font-bold text-[6vw] xl:text-[8vh]  text-center block w-full mt-[5vh] xl:mt-[1vh">
        Congrats,
        <span className="bg-gradient-to-r from-[#f46a59]  to-[#ffffff] bg-clip-text !text-transparent">
          {fullname}
        </span>
        <br /> your Ticket is Ready
      </span>

      <span className="block w-full text-center text-[3.8vw] xl:text-[3vh] mt-[3vh]">
        we've emailed your ticket to <br />
        <span className="!text-[rgba(244,_106,_89,_1)]">{email}</span> and will
        send updates in <br />
        the run up to the event.
      </span>
      <Ticket
        fullname={fullname}
        githubUsername={githubUsername}
        theImg={theImg}
      />
    </div>
  );
};

export default PreviewTicket;
