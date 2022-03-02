import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import ProjectComponentSmall from "../components/ProjectComponentSmall";

//CURRENT PROJECTS FOR SMALL AND MEDIUM SCREEN SIZE
/*
Set medium to true, this tells the project components that theyre being called during the medium sized render
*/

import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf";

function CurrentProjectsLarge(props) {
  const links1=[["https://greensock.com","Green Sock Animation Plugin"], ["https://danielmccannsayles.github.io/personal-website-version-1-build/", "Personal Website Version 1"],["https://www.figma.com/file/dCTom9EInfz5q8FTTQpW9w/All-Versions?node-id=0%3A1", "Figma All Drafts"],["https://github.com/danielmccannsayles/personal-website", "Personal Website Github"]]; 
  const links2=[["https://www.passageflight.org/","PASSAGE"], ["LIFE","Design Proposal"], ["https://github.com/danielmccannsayles/passage_flight_flutter", "Github Link"]];
  const links3=[["https://www.csulb.edu/criminology-criminal-justice-and-emergency-management/page/james-m-binnall","James Binnall"],['https://www.csiba.org/', 'California System-Involved Bar Association'], ["https://www.figma.com/file/UtHcw20eYlovLgkc3s2rNt/Rough-Drafts?node-id=0%3A1","Figma Rough Mock-up "]]; 
  const linkArr = [links1, links2, links3] //used later for footnote purposes
   const text=["This website is a digital portfolio showcasing projects I’ve worked on and skills I’ve acquired. I wrote it in React.js using Tailwind CSS for styling. I used GSAP[1] for the animation on the homepage, and the smooth scrolling. This is the second version of this website. (You can view the first-draft here[2]) The main changes are in the homescreen and the project section. I created the homepage graphics & prototyped the project section on the homepage in Figma. You can see a combined Figma file with version 1, and the homepage graphics & project section from version 2 here[3]. If you’d like to read more about the website or see the source code, check out the github page[4] or scroll down to the about section!",
              "Since September 2021, I've been working with a group of students on creating a joint app, education module, and physical model for kids in Latin America. Our team is working with a project called PASSAGE[1]. My role on the team is coding an app to engage kids and teach about STEM subjects along with water safety. To do this I’m using Flutter. You can read our current design proposal[2], or check out the github[3].",
              "After my work in the Second Annual Chances Hackathon, I stayed in touch with my client, James Binnall[1]. We discussed my working for his non-profit, CSIBA[2] in the future, and my making a personal website for him. In December 2021 we finalized an agreement and I’ve begun creating a personal website for him. Currently I’m only at the prototyping stage, mocking it up in Figma and running it by Dr. Binnall. Here’s a link[3] to some rough prototypes I’ve mocked up. I plan on using Sanity.io(A headless CMS) to make the website fully customizable by my client, without him knowing how to program at all.",
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
    <div style={{backgroundColor:"whitesmoke"}} className="section-header md:mb-6 px-auto py-4">
    <div className="my-6"></div> {/*spacer div*/}
    <h1 className = "underline text-xl text-center section-header pt-4" id="CurrentProjects">Current Projects</h1>
    <div  className=" flex flex-wrap items-center justify-center mx-auto"
    style={{gap:gap+'px'}}
      >
      <> {/*BEGIN LARGE COMPONENTS */}
      <ProjectComponent
        medium={false}
        active={active}
        specialId="1"
        title="Personal Website"
        text={text[0]}
        links={links1}
        expand={componentMethod}
      ></ProjectComponent>
      <ProjectComponent
        medium={false}
        active={active}
        specialId="2"
        title="App Designer - PASSAGE"
        text={text[1]}
        links={links2}
        expand={componentMethod}
        >
      </ProjectComponent>

      <ProjectComponent
        medium={false}
        active={active}
        specialId="3"
        title="Freelance Web Design"
        text={text[2]}
        links={links3}
        expand={componentMethod}
      ></ProjectComponent>
      </> {/*END LARGE COMPONENTS */}

      {expand && 
      <div style={{width:gap+(375*2)+'px', backgroundColor: "white", borderWidth:'4px', height:'340px'}}
      className="border-purple-500 p-6 text-black mx-auto rounded-md divide-y-2">
        <div>{text[active-1]}</div> 
       <ul className="mt-1 pt-1">{footnotes}</ul>
      </div>}

    
    </div>
    <div className="my-4"></div> {/*spacer div*/}
    </div>
    
  );
}

export default CurrentProjectsLarge;
