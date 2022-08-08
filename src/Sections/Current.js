import ProjectComponentSmall from "../components/ProjectComponentSmall";

export default function CurrentProjects(props) {
  const text = `I'm currently working as a Software Engineering Intern at Cisco, on the CPX Growth and Adoption Team. I'm having a great time so far! I've been working on three main projects: 
    1. I formed a team of interns to help improve an existing sentiment analysis machine learning model that classifies CX Cloud Customer Feedback. We improved its accuracy from from ~65% to ~94%. The technology used is Jupyter notebooks, Pandas Python library, and NLP models from hugging face.
    2. I've been assisting the CXUI-Componets team with creating test harnesses for their modular Angular components. The test harness obscure the internal functionality, so they can be used by other developers without deep knowledge of the components. These components are used hundreds of times in CX-Cloud.
    3. I'm currently creating an Electron application to automatically query websites such as MixPanel for CX-Cloud usage statistics, visualize that data in D3.js, and compile it into existing pdf files at user-specified locations using PDF-LIB and a custom GUI.`;
  return (
    <div
      style={{ backgroundColor: "whitesmoke" }}
      className="section-header px-auto py-4"
    >
      <div className="my-6"></div> {/*spacer div*/}
      <h1
        className="underline text-xl text-center section-header pt-4"
        id="CurrentProjects"
      >
        Current
      </h1>
      <div className="my-8"></div> {/*spacer div*/}
      <div className="flex flex-wrap items-center justify-center">
        {props.screenSize === "small" ? (
          <ProjectComponentSmall
            title="Cisco: Software Engineer Intern"
            text={text}
          ></ProjectComponentSmall>
        ) : (
          <div
            style={{
              width: 375 * 2 + "px",
              backgroundColor: "white",
              borderWidth: "2px",
              height: "400px",
            }}
            className="border-purple-500 p-6 text-black mx-auto rounded-md divide-y-2"
          >
            <div className="divide-y-2">
              <h1 className="text-xl m-1 text-center">
                {"Cisco: Software Engineer Intern"}
              </h1>
              <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
