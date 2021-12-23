import React from "react";
import gsap from "gsap";
import { ReactComponent as DesignerLarge } from "../assets/DesignerLarge.svg";
import { ReactComponent as EngineerLarge } from "../assets/EngineerLarge.svg";
import { ReactComponent as StudentLarge } from "../assets/StudentLarge.svg";
import { ReactComponent as DanielLarge} from "../assets/DanielLarge.svg";

import { ReactComponent as DesignerMedium} from "../assets/DesignerMedium.svg";
import { ReactComponent as EngineerMedium} from "../assets/EngineerMedium.svg";
import { ReactComponent as StudentMedium} from "../assets/StudentMedium.svg";
import { ReactComponent as DanielMedium} from "../assets/DanielMedium.svg";



import _ from 'underscore'; //used to slow down mouse events

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onAutoKill = this.onAutoKill.bind(this);
    this.onComplete = this.onComplete.bind(this);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollThrottled=_.throttle(this.handleScroll, 50);

    this.scrollTimeline = gsap.timeline({
      paused: true,
      progress: 0,
      autoKill: true,
    });

    this.state = { splashscreen: 1, intervalId: 0, smallScrollActive:false};
    
    this.smallScroll = React.createRef('');
    this.scrollRef = React.createRef("");
  }

 

  updateColor() {
    //run in set interval in componentdid mount. Used to update the color of the circles
    let num =
      Math.floor(this.scrollRef.current.scrollLeft / window.innerWidth + 0.5) +
      1;
    this.setState({ splashscreen: num });
  }

  handleClick(e) {
    if ( this.scrollTimeline && this.scrollTimeline.isActive()){
      this.scrollTimeline.kill(); //stop scroll timeline from playing
    }

    if (this.state.smallScrollActive){} //if it's active do nothing
    else{
    this.setState({smallScrollActive:true});
    this.scrollRef.current.classList.add('disabled');

    const num = parseInt(e.currentTarget.getAttribute("data-tag"));
    {
      /*I use currentTarget because it refers to the <svg el. e.target would refer to the <circle el, which has a null data-tag*/
    }
    this.smallScroll= gsap.to(this.scrollRef.current, {
      duration:
        1 +
        Math.abs(this.state.splashscreen - num) /
          2 ,
      ease: "power2",
      scrollTo: { x: window.innerWidth * (num - 1), autoKill: false, }, //set autokill to false to prevent glitches
      onComplete: ()=>this.onComplete(1),
    });
    this.setState({ splashscreen: num }); //update state to change color of circle
    }//end else statement on line 53
  }

  onAutoKill(){
    setInterval(this.state.intervalId);
    if (this.scrollRef.current.classList.contains('disabled')) 
      this.scrollRef.current.classList.remove('disabled');
  }

  onComplete(which){//which determines big vs small ani
    if (this.scrollRef.current.classList.contains('disabled')){ //avoid null errors
      this.scrollRef.current.classList.remove('disabled');
    } 
    if (which == 1){ //set to 1 on small animation, set to 0 on big animation
      this.setState({smallScrollActive:false}); 
    }
  }

  handleScroll(e) {
    if ( this.scrollTimeline && this.scrollTimeline.isActive() && ( e.deltaX>1 || e.deltaX<-1)){
      this.scrollTimeline.kill();
      if (this.scrollRef.current.classList.contains('disabled')) this.scrollRef.current.classList.remove('disabled');
      // setInterval(this.state.intervalId);
    }
  }

  componentDidMount() {
    this._isMounted = true; //including this to prevent error: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

    document.addEventListener("touchmove", this.handleScrollThrottled);
    document.addEventListener("wheel", this.handleScrollThrottled);

    let intervalId = setInterval(() => {
      //updates the circles in the splash screen page
      this.updateColor();
    }, 200);

    this.setState({ intervalId: intervalId }); //adds interval id to state so it can be cleared later
    clearInterval(this.state.intervalId); //pause interval
    
    this.scrollRef.current.classList.add('disabled');
    const modifier = 1; //should be
    this.scrollTimeline
      .to(this.scrollRef.current, { duration: 0.1, scrollTo: { x: 0 } })
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier, autoKill: true, onAutoKill:()=> this.onAutoKill, },
          overwrite:'auto',
        },
        ">+=1.5"
      )
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier * 2, autoKill: true, onAutoKill:()=> this.onAutoKill, },
          overwrite:'auto',
        },
        ">+=1.5"
      ) //1.5 seconds after
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier * 3, autoKill: true, onAutoKill:()=> this.onAutoKill, },
          overwrite:'auto',
          onComplete: ()=>this.onComplete(0),
        },
        ">+=1.5"
      ) //1.5 seconds after
      .play();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId); 

    document.removeEventListener("touchmove", this.handleScrollThrottled);
    document.removeEventListener("wheel", this.handleScrollThrottled);
  }

  render() {

    return (
      <>
        <div style={{height: window.innerHeight *(8.9/10)}} id="HomePage">
          <div className="bg-white relative scroll-wrapper"
          style={{height:window.innerHeight>800?'496px':'450px'}}>
            <div
              className="horiz-scroll w-full bg-white"
              ref={this.scrollRef}
              
            >
            {this.props.homePageScreenSize=='large' && <>
              <DesignerLarge
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1620-5)/2) +" 0 " + 5 + " 496"} //apparently I can put any number here huh...
              />
              <EngineerLarge
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1620-window.innerHeight)/2) +" 0 " + window.innerHeight + " 496"}
              />
              <StudentLarge
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1620-window.innerHeight)/2) +" 0 " + window.innerHeight + " 496"}
              />
              <DanielLarge
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1620-window.innerHeight)/2) +" 0 " + window.innerHeight + " 496"}
              />
            </>
            }

            {this.props.homePageScreenSize=='medium' && <>
              <DesignerMedium
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1140-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <EngineerMedium
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1140-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <StudentMedium
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1140-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <DanielMedium
                className="scroll-item"
                width={window.innerWidth}
                 viewBox={((1140-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
            </>
            }

            </div>

            <div className="absolute bottom-2 left-1/2 inline-flex svgclass  w-1/4 flex justify-center lg:gap-2 drop-shadow-xl">
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="1"
              >
                <circle
                  data-tag="two"
                  className={
                    this.state.splashscreen == 1
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white cursor-pointer"
                  }
                  cx="30"
                  cy="30"
                  r= {this.props.homePageScreenSize == 'medium'? "1.8vh":"2vh"}
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="2"
              >
                <circle
                  className={
                    this.state.splashscreen == 2 
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white cursor-pointer"
                  }
                  cx="30"
                  cy="30"
                  r= {this.props.homePageScreenSize == 'medium'? "1.8vh":"2vh"}
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="3"
              >
                <circle
                  className={
                    this.state.splashscreen == 3
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white cursor-pointer"
                  }
                  cx="30"
                  cy="30"
                  r= {this.props.homePageScreenSize == 'medium'? "1.8vh":"2vh"}
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="4"
              >
                <circle
                  className={
                    this.state.splashscreen == 4
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white cursor-pointer"
                  }
                  cx="30"
                  cy="30"
                  r= {this.props.homePageScreenSize == 'medium'? "1.8vh":"2vh"}
                />
              </svg>
            </div>
          </div>

          <div className="bg-white w-full py-4 px-2 md:px-10 flex " style={{height:((window.innerHeight*(9/10))-((window.innerHeight>800)?496:450) +'px')} }>
          {/* <div className="text-sm mx-auto">
              I'm A <span className="text-xl text-blue-500 font-bold">Student</span> at Santa Clara University, studying <span className=" text-green-500 font-bold">General Engineering</span> with a concentration in <span className=" text-red-500 font-bold">Design</span>
              </div> */}
            <div className="flex gap-2 gap-10 lg:gap-20 w-full justify-center my-auto">
              <div className=" m-x-6 ">
              <h1 className="text-xl text-red-500 underline text-center mb-1">Designer</h1>
                <ul className="text-sm custom-list">
                <li><a target="_blank" href="https://www.figma.com/file/7GH6pfk1eta5mPU1VMaPiY/Rough-Draft?node-id=0%3A1">This website v.1: Wireframe</a></li>
                <li><a target="_blank" href="https://www.figma.com/file/9hWHeBCK5nTLdfsUAQ0jDy/Version-2%3A-Graphics?node-id=0%3A1">This website v.2: Graphics</a></li>
                <li><a target="_blank" href="https://www.figma.com/file/F9F8Y5P0C5NN1I7sYWPs0S/Version-2-Projects?node-id=0%3A1">This website v.2: Projects</a></li>
                <li><a target="_blank" href="https://www.figma.com/file/UtHcw20eYlovLgkc3s2rNt/Rough-Drafts?node-id=0%3A1">Current Freelance Job</a></li>
                <li><a target="_blank" href="https://www.figma.com/file/pMcYJyOjqnLQg74RGUq31P/Wireframe?node-id=0%3A1">Timer app Figma project</a></li>
                <li><a target="_blank" href="https://www.scu.edu/engineering/academic-programs/department-of-computer-engineering/undergraduate/course-descriptions/">Coen 163: Web Usability(UX)</a></li>
              </ul>

              </div>
              <div className="m-x-6 ">
              <h1 className="text-xl text-green-500 underline text-center mb-1">Engineer</h1>
                <ul className="text-sm custom-list">
                <li><a target="_blank" href="https://github.com/danielmccannsayles">Various Projects (Github link)</a></li>
                <li><a target="_blank" href="https://devpost.com/software/publix-transportation">Inrix Hack Submission (React)</a></li>
                <li><a target="_blank" href="https://www.scu.edu/engineering/academic-programs/department-of-mechanical-engineering/undergraduate/course-descriptions/">Mech 121: Thermodynamics</a></li> 
                <li><a target="_blank" href="https://www.engr.scu.edu/~emaurer/classes/ceng41_statics/syllabus.shtml">Ceng 141: Mechanics (Statics)</a></li>
                <li><a target="_blank" href="https://www.scu.edu/media/school-of-engineering/pdfs/mechanical-engineering/MECH-143.pdf">Elen 123: Mechatronics</a></li>
                <li><a target="_blank" href="https://www.cse.scu.edu/~atkinson/teaching/sp20/012/">Coen 12: Abstract Data Types</a></li>    

                </ul>
              </div>
              <div className="m-x-6 ">
                <h1 className="text-xl text-blue-500 underline text-center mb-1">Student</h1>
                <ul className="text-sm custom-list">
                <li><a target="_blank" href="https://scuakpsi.com/">AKPsi Professional Fraternity</a></li>
                <li><a target="_blank" href="https://www.freecodecamp.org/certification/fccb3105040-9dfe-4763-868b-cc9349a80f00/javascript-algorithms-and-data-structures">Free Code Camp JS Certificate</a></li>
                <li><a target="_blank" href="http://www.applmath.engr.scu.edu/~garrison/AMTH108-S05/amth108.html">Amth 108: Probability</a></li>
                <li><a target="_blank" href="https://www.scu.edu/engineering/academic-programs/general-engineering/undergraduate/course-descriptions/">Engr 19: Ethics in Tech</a></li>
                <li><a target="_blank" href="https://www.scu.edu/bulletin/undergraduate/chapter-3/English.html">Engl 181: Eng. Communications</a></li>
                <li>Learning: <a target="_blank" href="https://greensock.com/gsap/">GSAP,</a> <a target="_blank" href="https://www.sanity.io/">Sanity.io</a></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
