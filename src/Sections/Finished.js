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

function FinishedProjects(props) {
  const links1 = [
    ["https://www.passageflight.org/", "PASSAGE"],
    ["LIFE", "Design Proposal"],
    [
      "https://github.com/danielmccannsayles/passage_flight_flutter",
      "Github Link",
    ],
  ];
  const links2 = [
    [
      "https://www.csulb.edu/criminology-criminal-justice-and-emergency-management/page/james-m-binnall",
      "James Binnall",
    ],
    [
      "https://www.figma.com/file/UtHcw20eYlovLgkc3s2rNt/Rough-Drafts?node-id=0%3A1",
      "Figma Rough Mock-up ",
    ],
  ];
  const links3 = [
    ["https://greensock.com", "Green Sock Animation Plugin"],
    [
      "https://danielmccannsayles.github.io/personal-website-version-1-build/",
      "Personal Website Version 1",
    ],
    [
      "https://www.figma.com/file/dCTom9EInfz5q8FTTQpW9w/All-Versions?node-id=0%3A1",
      "Figma All Drafts",
    ],
    [
      "https://github.com/danielmccannsayles/personal-website",
      "Personal Website Github",
    ],
  ];
  const links4 = [
    ["http://acm.engr.scu.edu/inrix/", "INRIX Hackathon"],
    [
      "https://devpost.com/software/publix-transportation",
      "Devpost Submission",
    ],
    [
      "https://github.com/danielmccannsayles/INRIX_HACKATHON_REAL",
      "Github Publix Website",
    ],
  ];
  const links5 = [
    ["SECONDCHANCES", "Final Presentation"],
    ["THIRDPLACE", "Certificate"],
  ];
  const linkArr = [links1, links2, links3, links4, links5]; //used later for footnote purposes
  const text = [
    `From September 2021 to June 2022 I worked with a team of students to create a joint app, education module, and physical model water filter for kids in Latin America, in conjunction with a nonprofit initiative led by PASSAGE[1]. Read our Design Proposal here[2] to learn more about our project. 
    My role on the team was coding an android app in Flutter to engage young Latin American students and educate them about STEM subjects and with water safety. I incorporated many features in order to accomplish that including: Real time data-display through a Bluetooth connection with the physical filtration device, a custom navigable PDF display, persistent local data storage, guided learning modules, and more. Check out the GitHub repository here[3].`,    
    "After my work in the Second Annual Chances Hackathon, I stayed in touch with my client, James Binnall[1]. We discussed my creating a personal website for him, and we began collaborating towards this goal in December 2021. Unfortunately, progress halted in March 2022 due to preoccupations. I made a series of Figma prototypes based on his feedback and input for the website. Here’s a link[2] to the original rough prototype created according to his specifications. I then built a rough draft of the website using Sanity.io and React.js. I hope to continue work once our schedules clear up.",
    "This website is a digital portfolio showcasing projects I’ve worked on and skills I’ve acquired. I wrote it in React.js using Tailwind CSS for styling. I used GSAP for the animation on the homepage, and the smooth scrolling. This is the second version of this website. (You can view the first-draft here[1]) The main changes are in the homescreen and the project section. I created the homepage graphics & prototyped the project section on the homepage in Figma. You can see a combined Figma file with version 1, and the homepage graphics & project section from version 2 here[2]. If you’d like to read more about the website or see the source code, check out the github page[3] or scroll down to the about section!",
    "I attended a hackathon in November 2021 through SCU, sponsored by INRIX[1]. Our project, ‘Publix Transportation,’ got my teammate and I to the final 7 out of 122 participants. Our project was a website built in react.js that compares public transportation cost and private transportation cost, leveraging INRIX’s data and making heavy use of Google & INRIX’s APIs. I worked mostly with the front end design of the website, and the google API’s, including an inserted customizable google map iframe that drew a user-inputted route onto it. If you’d like to see more, check out our Devpost submission[2] and the code for our submission on my github profile[3].",
    "I won third place at the Second Chances SCU Hackathon in October 2021. I worked with a client, James Binnall, and his soon-to-be non-profit ‘California System-Involved Bar Association’ (CSIBA). I was the only person working on this project, so I had to simultaneously communicate with my client, manage my time, and summarize/present. The tasks I accomplished: Fixing the website aesthetics, including making it mobile friendly through CSS media queries; adding a FAQ and more content to the website; and creating an automated email campaign. You can view the presentation[1] that I gave to the judges, and you can also view the certificate I got for placing in third[2].",
  ];
  const [expand, setExpand] = React.useState(false); //define a method in here and pass it in to each of the project components so when they are clicked they can turn it on or off.
  const [expand2, setExpand2] = React.useState(false); //second expansion
  const [active, setActive] = React.useState(0);
  const [active2, setActive2] = React.useState(0);

  function componentMethod(num) {
    //num is way of identifying which project it is
    if (num === active) {
      //if it was already being clicked
      setExpand(false); //close display
      setActive(0);
    } else {
      setExpand(true); //open (or keep open) display
      setActive(num);
    }
  }

  function componentMethod2(num) {
    //num is way of identifying which project it is
    if (num === active2) {
      //if it was already being clicked
      setExpand2(false); //close display
      setActive2(0);
    } else {
      setExpand2(true); //open (or keep open) display
      setActive2(num);
    }
  }

  let gap = window.innerWidth < 900 ? (window.innerWidth - 768) / 10 + 10 : 30; //set gap here
  let footnotes;
  if (active !== 0) {
    footnotes = linkArr[active - 1].map((row, index) => {
      return (
        <li key={index}>
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
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
    });
  }

  let footnotes2;
  if (active2 !== 0) {
    footnotes2 = linkArr[active2 - 1].map((row, index) => {
      return (
        <li key={index}>
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
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
    });
  }

  return (
    <div
      style={{ backgroundColor: "whitesmoke" }}
      className="section-header px-auto py-4"
    >
      <div className="my-6"></div> {/*spacer div*/}
      <h1
        className="underline text-xl text-center section-header pt-4"
        id="FinishedProjects"
      >
        Past Projects
      </h1>
      <div className="my-4"></div> {/*spacer div*/}
      <div
        className=" flex flex-wrap items-center justify-center lg:mx-12"
        style={{ columnGap: gap + "px", rowGap: "30px" }}
      >
        {props.screenSize !== "small" && (
          <>
            {" "}
            {/*BEGIN MEDIUM AND LARGE COMPONENTS */}
            <ProjectComponent
              medium={true}
              active={active2}
              faceUp={false}
              specialId="1"
              title="App Designer - PASSAGE"
              text={text[0]}
              links={links1}
              expand={componentMethod2}
            ></ProjectComponent>
            <ProjectComponent
              medium={true}
              active={active2}
              faceUp={false}
              specialId="2"
              title="Freelance Web Design"
              text={text[1]}
              links={links2}
              expand={componentMethod2}
            ></ProjectComponent>
            {props.screenSize === "medium" && expand2 && (
              <div
                style={{
                  width: gap + 375 * 2 + "px",
                  backgroundColor: "white",
                  borderWidth: "4px",
                  height: "340px",
                }}
                className="border-purple-500 p-6 text-black mx-auto rounded-md divide-y-2"
              >
                <div style={{ whiteSpace: "pre-wrap" }} >{text[active2 - 1]}</div>
                <ul className="mt-1 pt-1">{footnotes2}</ul>
              </div>
            )}
            <ProjectComponent
              medium={true}
              active={active}
              faceUp={false}
              specialId="3"
              title="Portfolio Website"
              text={text[2]}
              links={links3}
              expand={componentMethod}
            ></ProjectComponent>
            <ProjectComponent
              medium={true}
              active={active}
              faceUp={false}
              specialId="4"
              title="Inrix Hackathon"
              text={text[3]}
              links={links4}
              expand={componentMethod}
            ></ProjectComponent>
            {props.screenSize === "medium" && expand && (
              <div
                style={{
                  width: gap + 375 * 2 + "px",
                  backgroundColor: "white",
                  borderWidth: "4px",
                  height: "340px",
                }}
                className="border-purple-500 p-6 text-black mx-auto rounded-md divide-y-2"
              >
                <div style={{ whiteSpace: "pre-wrap" }} >{text[active - 1]}</div>
                <ul className="mt-1 pt-1">{footnotes}</ul>
              </div>
            )}
            <ProjectComponent
              medium={true}
              active={active}
              faceUp={true}
              specialId="5"
              title="Second Chances Hack"
              text={text[4]}
              links={links5}
              expand={componentMethod}
            ></ProjectComponent>
          </>
        )}{" "}
        {/*END MEDIUM AND LARGE COMPONENTS */}
        {props.screenSize === "small" && (
          <>
            {" "}
            {/*BEGIN SMALL COMPONENTS */}
            <ProjectComponentSmall
              title="App Designer - PASSAGE"
              text={text[0]}
              links={links1}
            ></ProjectComponentSmall>
            <ProjectComponentSmall
              title="Freelance Web Design"
              text={text[1]}
              links={links2}
            ></ProjectComponentSmall>
            <ProjectComponentSmall
              title="Portfolio Website"
              text={text[2]}
              links={links3}
            ></ProjectComponentSmall>
            <ProjectComponentSmall
              title="Inrix Hackathon"
              text={text[3]}
              links={links4}
            ></ProjectComponentSmall>
            <ProjectComponentSmall
              title="Second Chances Hack"
              text={text[4]}
              links={links5}
            ></ProjectComponentSmall>
          </>
        )}{" "}
        {/*END SMALL COMPONENTS */}
      </div>
      <div className="my-4"></div> {/*spacer div*/}
    </div>
  );
}

export default FinishedProjects;
