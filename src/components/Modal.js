import reactDom from "react-dom";
import React from "react";
import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf"

function Modal(props) {
  const footnotes = props.links.map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className="sm:text-gray-400 sm:hover:text-white inline-flex underline sm:no-underline"
          href={
            row[0] == "LIFE" ?
              LIFE:
              row[0] =="SECONDCHANCES" ?
                SECONDCHANCES:
                row[0]=="THIRDPLACE"?
                  THIRDPLACE:
                  row[0] //check if it's a pdf, otherwise it's just the normal link
            }
        >
          {index + 1}. {row[1]}{" "}
        </a>
      </li>
    );
  });

  return reactDom.createPortal(
<>
      <div>
      <div className="w-full h-full fixed top-0 z-40 opacity-90 bg-black">
      </div>
      <div
        style={window.innerWidth<700?
        {height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          zIndex: "50",
          backgroundColor: "#383838",
          color: "white",
          }:(window.innerWidth<1000?{
          height: "80vh",
          width: "80vw",
          position: "fixed",
          top: "10%",
          right:"10%",
          zIndex: "50",
          backgroundColor: "#383838",
          color: "white",
          borderRadius:"50px",
          borderColor:"#A78BFA",
          borderWidth:"4px"
        }:(window.innerWidth<1400?{
          height: "70vh",
          width: "70vw",
          position: "fixed",
          top: "15%",
          right:"15%",
          zIndex: "50",
          backgroundColor: "#383838",
          color: "white",
          borderRadius:"50px",
          borderColor:"#A78BFA",
          borderWidth:"4px"
        }:{
          height: "60vh",
          width: "60vw",
          position: "fixed",
          top: "20%",
          right:"20%",
          zIndex: "50",
          backgroundColor: "#383838",
          color: "white",
          borderRadius:"50px",
          borderColor:"#A78BFA",
          borderWidth:"4px"
        }
        
        ))}
        className="opacity-200"
      >
        <div className="opacity-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 absolute top-4 right-2 sm:top-4 sm:right-4 stroke-current text-white sm:text-gray-400 sm:hover:text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            onClick={props.closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="divide-y-2 mx-2 sm:mx-10">
            <h1 className="text-center mt-12 mb-2 font-bold text-xl">
              {props.title}
            </h1>
            <p className="p-4 sm:text-lg"> {props.text}</p>
            <ol className="ml-4">{footnotes}</ol>
          </div>
        </div>
      </div>
      </div>
</>,
    document.querySelector("#modal")
  );
}

export default Modal;
