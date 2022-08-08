import GuessingGame from "./GuessingGame";

function About(props) {
  return (
    <div style={{ backgroundColor: "whitesmoke" }} className="p-8">
      <h1
        className="text-center m-4 font-size-lg md:pt-4 underline section-header text-xl"
        id="AboutMe"
        style={{ ScrollMarginTop: "75px" }}
      >
        About
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 mx-4">
        <GuessingGame></GuessingGame>
        <div className="w-96">
          <h1 className="text-center text-purple-500 mb-4">
            About This Website{" "}
          </h1>
          <div className="italic text-center">
            This is my second version of my portfolio website. Click{" "}
            <a
              href="https://danielmccannsayles.github.io/personal-website-version-1-build/"
              className= {props.screenSize ==='small'? "text-purple-500 underline":"cursor-pointer hover:text-purple-500 underline"}
            >
              here
            </a>
            {" "}to see the first version{" "}
            {props.screenSize === "small" && <div className="mt-2">
              ***I see you're on mobile.. Check out my website on a computer screen - it's way cooler!***
            </div>}
          </div>
          <div className="mt-4 text-center">
            Here are two of my favorite parts of this website:
            <ol>
              <li className="mt-4">
                1. The animation on the homescreen (Computer version). I got
                familiar with GSAP and React Refs, and the{" "}
                <span style={{ fontStyle: "italic" }}>interesting</span>{" "}
                interactions they have.. This animation required me to add and
                remove CSS classes so that the graphics on the homepage would
                snap to page, but not during the animation. I also used the
                React 'setInterval' method to update the navigation circles.{" "}
              </li>
              <li className="mt-2 mb-10">
                2. The 'About Me' quiz: The about me quiz draws on a JS object
                of questions, answers, and correct answers, to populate the quiz
                body. The quiz component has multiple state arrays, and relies
                heavily on state changes. This was my first time creating a
                'gamified' component in React.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
