import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import uploadIcon from "../public/images/icon-upload.svg";
import iconInfo from "../public/images/icon-info.svg";

const Boxes = ({
  fullname,
  setFullname,
  files,
  setFiles,
  imgWeight,
  setImgWeight,
  email,
  setEmail,
  githubUsername,
  setGithubUsername,
  formSubmitted,
  setFormSubmitted,
  theImg,
  setTheImg,
}) => {
  // navigate to the preview ticket component
  const navigate = useNavigate();

  useEffect(() => {
    if (files.length > 0) {
      setTheImg(URL.createObjectURL(files[0]));
      setImgWeight(files[0].size / 1024); // size in KB
    }
  }, [files]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const isFormValid = () => {
    return fullname.trim() && email.trim() && githubUsername.trim();
  };

  const isImgTooBig = () => imgWeight > 500;

  const handleSubmit = () => {
    setFormSubmitted(true);
    if (isFormValid() && !isImgTooBig()) {
      // alert("You're good to go!");
      navigate("/preview");
    } else {
      alert("Something is missing or invalid.");
    }
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col w-[90vw] xl:w-[30vw] mt-[5vh]">
      <label htmlFor="fileUp">Upload Avatar</label>
      <div
        className="mt-[3vh] flex flex-col items-center bg-[rgba(255,255,255,0.3)] w-full py-[4vh] outline-dashed outline-1 outline-[white] rounded-2xl"
        onDragOver={handleDragOver}
        onClick={handleClick}
        onDrop={handleDrop}
      >
        <div className="relative rounded-2xl flex justify-center items-center w-[6rem] h-[6rem] bg-[rgba(255,255,255,0.3)]">
          <img
            src={files.length > 0 ? theImg : uploadIcon}
            alt="Uploaded preview"
            className={`absolute ${
              files.length > 0 ? "w-full rounded-[1rem]" : "w-[4rem]"
            }`}
          />
        </div>
        <label
          htmlFor="fileInput"
          className="mt-[3vh] text-[1.1rem] cursor-pointer"
        >
          Drag and Drop or Click to Upload
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {!isImgTooBig() && (
        <span className="flex mt-[3vh] text-[1.1rem] opacity-50">
          <img src={iconInfo} alt="" className="mr-2" />
          Upload your Photo (JPG or PNG, max size: 500KB)
        </span>
      )}

      {isImgTooBig() && (
        <span className="flex mt-[3vh] text-[1.1rem] !text-[rgba(244,_106,_89,_1)]">
          <img src={iconInfo} alt="" className="mr-2" />
          File Too Large. Please upload an image under 500KB
        </span>
      )}

      <div className="mt-[4vh] text-[1.1rem]">
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="pl-[1rem] mt-[2vh] bg-[rgba(255,255,255,0.3)] w-full h-[6vh] xl:h-[8vh] outline outline-1 outline-white rounded-2xl"
        />
        {formSubmitted && !fullname.trim() && (
          <span className="flex mt-[1vh] text-[1rem] !text-[rgba(244,_106,_89,_1)]">
            <img src={iconInfo} alt="" className="mr-2" />
            Please Enter Your Full Name
          </span>
        )}
      </div>

      <div className="mt-[4vh] text-[1.1rem]">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-[1rem] mt-[2vh] bg-[rgba(255,255,255,0.3)] w-full h-[6vh] xl:h-[8vh] outline outline-1 outline-white rounded-2xl"
        />
        {formSubmitted && !email.trim() && (
          <span className="flex mt-[1vh] text-[1rem] !text-[rgba(244,_106,_89,_1)]">
            <img src={iconInfo} alt="" className="mr-2" />
            Please Enter a Valid Email Address
          </span>
        )}
      </div>

      <div className="mt-[4vh] text-[1.1rem]">
        <label htmlFor="githubUsername">GitHub Username</label>
        <input
          id="githubUsername"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          className="pl-[1rem] mt-[2vh] bg-[rgba(255,255,255,0.3)] w-full h-[6vh] xl:h-[8vh] outline outline-1 outline-white rounded-2xl"
        />
        {formSubmitted && !githubUsername.trim() && (
          <span className="flex mt-[1vh] text-[1rem] !text-[rgba(244,_106,_89,_1)]">
            <img src={iconInfo} alt="" className="mr-2" />
            Please Enter Your GitHub Username
          </span>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full h-[8vh] mt-[4vh] rounded-2xl bg-[rgba(244,_106,_89,_1)] text-white text-[1.1rem]"
      >
        Generate My Ticket
      </button>
    </div>
  );
};

export default Boxes;
