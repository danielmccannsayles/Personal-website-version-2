import GuessingGame from "./GuessingGame";

function About() {
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
          <h1 className="text-center text-purple-500 mb-4">About This Website </h1>
          <div className="italic text-center">This is my second version of this website. Click <a href="" className="cursor-pointer hover:text-purple-500 underline">here </a>to see the previous version (It's very similar to the current mobile version) <div className="mt-2">*** If you've only seen the mobile version of this website try it out on desktop - it's way cooler! ***</div></div>
            <div className="mt-4 text-center">Here are two of my favorite parts of this website: 
                <ol>
                <li className="mt-4">1. The animation on the homescreen(Desktop version). I got familiar with GSAP and React refs. It required me to add and remove CSS classes so that the graphics on the homepage would snap when scrolled, but not when the animation was active. I used the React 'setInterval' method to update the little circles. </li>
                <li className="mt-2 mb-10">2. The 'About Me' quiz: The about me quiz draws on a JS object of questions, answers, and correct answers, to populate the quiz body. The quiz component has multiple state arrays, and relies heavily on state changes. This was my first time creating a 'gamified' component in React.</li>

                </ol>   
         </div>
        </div>
      </div>
    </div>
  );
}

export default About;
