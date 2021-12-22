import React from "react";
import "./projectStyleSheet.css";

import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf";

function ProjectComponentSmall(props) {
  const [clicked, setClicked] = React.useState(false);
  //add a state hook here that says if its mobile or not. On the small screen I want to display less words in general, and pass the modal a shorter/abbreviated version.

  const close = () => {
    setClicked(false);
  };

  const footnotes = props.links.map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className="text-purple-500 inline-flex underline"
          href={
            row[0] === "LIFE"
              ? LIFE
              : row[0] === "SECONDCHANCES"
              ? SECONDCHANCES
              : row[0] === "THIRDPLACE"
              ? THIRDPLACE
              : row[0] //check if it's a pdf, otherwise it's just the normal link
          }
        >
          {index + 1}. {row[1]}{" "}
        </a>
      </li>
    );
  });

  return (
    <>
      <div
        className={
          "p-6 text-black w-11/12 shadow-xl sm:w-2/3 mb-10 mt-5 cursor-pointer border-purple-400 relative rounded-md drop-shadow-md border-2"
          
        }
        //custom css cause tailwind can't do it
        style={{ backgroundColor: "white"} }
        onClick={() => {
          if (!clicked) 
            setClicked(true);
        }}
      >
      <>
        {clicked &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 absolute top-2 right-2 stroke-current text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            onClick={close}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>}
          </>

        <div className="divide-y-2">
          <h1 className="text-xl m-1 text-center ">{props.title}</h1>
          <p className="pt-2 ">
            { props.text.substring(0, 178) +
                (clicked? props.text.substring(178, props.text.length): ".. [View More]") } 
          </p>

          {clicked && <ul className="mt-1 pt-1"> {footnotes}</ul>}
        </div>
      </div>
    </>
  );
}

export default ProjectComponentSmall;
