import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boxes from "./Boxes";
import Text from "./Text";
import { React, useState } from "react";
import squiglyLineRight from "../public/images/pattern-squiggly-line-top.svg";
import squiglyLineBottom from "../public/images/pattern-squiggly-line-bottom-desktop.svg";
import PreviewTicket from "./PreviewTicket";
import Top from "./Top";

const App = () => {
  const [files, setFiles] = useState([]);
  const [imgWeight, setImgWeight] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [theImg, setTheImg] = useState();

  return (
    <BrowserRouter>
      <div className='relative flex justify-center w-screen h-fit bg-[url("../public/images/background-desktop.png")] bg-cover [background-repeat:round]'>
        <div className="absolute bg-[url('../public/images/pattern-lines.svg')] h-full w-screen [box-shadow:inset_0_-40vh_10rem_rgba(17,7,38,1)] overflow-hidden">
          <img src={squiglyLineRight} className="float-right w-[20vw]" alt="" />
          <img
            src={squiglyLineBottom}
            className="absolute bottom-[0] rotate-[-6deg] w-[45vw]"
            alt=""
          />
        </div>
        <div className="z-10  h-fit container flex flex-col items-center p-[1.5vh] xl:p-[5vh]">
          <Top />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Text />
                  <Boxes
                    files={files}
                    setFiles={setFiles}
                    imgWeight={imgWeight}
                    setImgWeight={setImgWeight}
                    fullname={fullname}
                    setFullname={setFullname}
                    email={email}
                    setEmail={setEmail}
                    githubUsername={githubUsername}
                    setGithubUsername={setGithubUsername}
                    formSubmitted={formSubmitted}
                    setFormSubmitted={setFormSubmitted}
                    theImg={theImg}
                    setTheImg={setTheImg}
                  />
                </>
              }
            />
            <Route
              path="/preview"
              element={
                <PreviewTicket
                  files={files}
                  setFiles={setFiles}
                  imgWeight={imgWeight}
                  setImgWeight={setImgWeight}
                  fullname={fullname}
                  setFullname={setFullname}
                  email={email}
                  setEmail={setEmail}
                  githubUsername={githubUsername}
                  setGithubUsername={setGithubUsername}
                  formSubmitted={formSubmitted}
                  setFormSubmitted={setFormSubmitted}
                  theImg={theImg}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// w-screen h-screen shadow-[inset_0_-50vh_11rem_rgba(17,7,38,1)]'></div>
