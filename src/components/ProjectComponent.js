import React from "react";
import "./projectStyleSheet.css";
import Modal from "./Modal";

import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf";

function ProjectComponent(props) {
  //expecting a 
  //add a state hook here that says if its mobile or not. On the small screen I want to display less words in general, and pass the modal a shorter/abbreviated version.
  const clicked = (props.active == props.specialId)

  
  const footnotes = props.links.map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className="sm:text-gray-400 sm:hover:text-white inline-flex underline sm:no-underline"
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
  
  let left=(props.active ==1 && !props.medium)? "220px": (props.active ==3 && !props.medium)?"42px":"137px";

  //this janky solution is for when theres one project component on it's own, and the triangle needs to face up
  let triangleStyle = (props.active==3 && props.medium==true)?
  {top: "-52px", //set this to height of triangle plus border offset
    left: "137px", //187 - 50px 
    width: 0,
    height: 0,
    borderLeft: "52px solid transparent",
    borderRight: "52px solid transparent",
    borderTop: "52px solid #A855F7",}
    :
    { bottom: "-50px", //set this to height of triangle plus border offset
      left: left , //187 - 52px 
      width: 0,
      height: 0,
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      borderBottom: "50px solid #A855F7",}

  return (
    <>
      <div
        className={
          "p-6 text-black w-11/12 drop-shadow-xl sm:w-2/3 mb-4 mt-5 cursor-pointer border-2 relative border-purple-500 rounded-lg " +
          (clicked ? "" : "")
        }
        //custom css cause tailwind can't do it
        style={{ backgroundColor: "white", width:'375px', height:'220px'} }
        onClick={() => {
          props.expand(props.specialId); //pass this on to upper level component(current projects or finished projects)
        }}
      >
      {clicked && <div style={{width:'100%', height:'100%', backgroundColor:'#a855f7', zIndex:'40', position:'absolute', top:'0', left:'0'}} className="text-white">
      {/* <div>{props.title}</div> */}
      <svg style={{top:'35px', left:'112px', position:'absolute', opacity:1}}
      xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>}

        <div className="divide-y-2">
          <h1 className="text-xl m-1 text-center">{props.title}</h1>
          <p className="pt-2 ">
            {props.screenSize == "small" &&
              props.text.substring(0, 178) +
                (clicked? props.text.substring(179, props.text.length): ".. [View More]") }
              
                {props.screenSize != "small" &&
              props.text.substring(0, 178) +
                (clicked? '        ':".. [View More]") }
          </p>

          {clicked  && 
            <div
              className="absolute text-purple-500"
              style={triangleStyle}
            ></div>
          }

        </div>
      </div>
    </>
  );
}

export default ProjectComponent;
