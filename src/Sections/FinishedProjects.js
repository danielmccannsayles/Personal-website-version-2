import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import ProjectComponentSmall from "../components/ProjectComponentSmall";

import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf";

function FinishedProjects(props) {
  const links1=[["http://acm.engr.scu.edu/inrix/","INRIX Hackathon"], ["https://devpost.com/software/publix-transportation", "Devpost Submission"], ["https://github.com/danielmccannsayles/INRIX_HACKATHON_REAL", "Github Publix Website"]];
  const links2=[["SECONDCHANCES","Final Presentation"], ["THIRDPLACE","Certificate"]];
 
  const linkArr = [links1, links2] //used later for footnote purposes
  const text=["I attended a hackathon in November 2021 through SCU, sponsored by INRIX[1]. Our project, ‘Publix Transportation,’ got my teammate and I to the final 7 out of 122 participants. Our project was a website built in react.js that compares public transportation cost and private transportation cost, leveraging INRIX’s data and making heavy use of Google & INRIX’s APIs. I worked mostly with the front end design of the website, and the google API’s, including an inserted customizable google map iframe that drew a user-inputted route onto it. If you’d like to see more, check out our devpost submission[2] and the code for our submission on my github profile[3].",
  "I won third place at the Second Chances SCU Hackathon in October 2021. I worked with a client, James Binnall, and his soon-to-be non-profit ‘California System-Involved Bar Association’ (CSIBA). I was the only person working on this project, so I had to simultaneously communicate with my client, manage my time, and summarize/present. The tasks I accomplished: Fixing the website aesthetics, including making it mobile friendly through CSS media queries; adding a FAQ and more content to the website; and creating an automated email campaign. You can view the presentation[1] that I gave to the judges, and you can also view the certificate I got for placing in third[2].",    
  ]

  const [expand, setExpand] = React.useState(false); //define a method in here and pass it in to each of the project components so when they are clicked they can turn it on or off.
  const [active, setActive] = React.useState(0);

  function componentMethod(num){ //num is way of identifying which project it is
    if (num==active){//if it was already being clicked
      setExpand(false); //close display
      setActive(0);
    }
    else{
      setExpand(true); //open (or keep open) display
      setActive(num);
    }
  }

  let gap =window.innerWidth<900?(window.innerWidth-768)/10 + 10:30; //set gap here
  let footnotes;
  if (active!=0){
  footnotes = linkArr[active-1].map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className=" hover:text-purple-500 inline-flex underline"
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
  })
  };

  return (
    <div style={{backgroundColor:"whitesmoke"}} className="section-header md:mb-8">
    <h1 className = "underline text-xl text-center section-header pt-4" id="FinishedProjects">Finished Projects</h1>
    <div  className=" flex flex-wrap items-center justify-center mx-auto"
    style={{columnGap:gap+'px', rowGap:'30px'}}
      >

      {props.screenSize != 'small' && <> {/*BEGIN MEDIUM COMPONENTS */}
      <ProjectComponent
        medium={true}
        active={active}
        specialId="1"
        title="Inrix Hackathon"
        text={text[0]}
        links={links1}
        expand={componentMethod}
      ></ProjectComponent>
      <ProjectComponent
        medium={true}
        active={active}
        specialId="2"
        title="Second Chances Hack"
        text={text[1]}
        links={links2}
        expand={componentMethod}
        >
      </ProjectComponent> 
      
      {expand && 
      <div style={{width:gap+(375*2)+'px', backgroundColor: "white", borderWidth:'4px', height:'340px'}}
      className="border-purple-500 p-6 text-black mx-auto rounded-md divide-y-2 ">
       <div>{text[active-1]}</div> 
       <ul className="mt-1 pt-1">{footnotes}</ul>
      </div>}

      
      {/*END MEDIUM COMPONENTS */}
      </>}


      {props.screenSize == 'small' &&<> {/*BEGIN SMALL COMPONENTS */}
    <ProjectComponentSmall
        title="Inrix Hackathon"
        text={text[0]}
        links={links1}
      ></ProjectComponentSmall>
       <ProjectComponentSmall
        title="Second Chances Hack"
        text={text[1]}
        links={links2}
      ></ProjectComponentSmall>
    </>} {/*END SMALL COMPONENTS */}


    </div>
    <div className="my-4"></div> {/*spacer div*/}
    </div>
    
  );
}

export default FinishedProjects;
