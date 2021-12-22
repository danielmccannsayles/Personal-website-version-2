import React from "react";
import { ReactComponent as DesignerLarge } from "../assets/DesignerLarge.svg"

import { ReactComponent as DesignerSmall} from "../assets/DesignerSmall.svg";
import { ReactComponent as EngineerSmall} from "../assets/EngineerSmall.svg";
import { ReactComponent as StudentSmall} from "../assets/StudentSmall.svg";

//Import small size svgs here

class HomePageSmallScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { splashscreen: 1, intervalId: 0 };

    this.scrollRef = React.createRef("");
  }

  updateColor() {
    //run in set interval in componentdid mount. Used to update the color of the circles
    let num =
      Math.floor(this.scrollRef.current.scrollLeft / window.innerWidth + 0.5) +
      1;
    this.setState({ splashscreen: num });
  }

  componentDidMount() {
    this._isMounted = true; //including this to prevent error: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let intervalId = setInterval(() => {
      this.updateColor();
    }, 200);

    this.setState({ intervalId: intervalId }); //adds interval id to state so it can be cleared later
    clearInterval(this.state.intervalId); //pause interval
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId); //clears interval
  }

  render() {
    return (
      <>
        <div style={{ height: "90vh" }} id="HomePage">
          <div className="bg-black relative scroll-wrapper">
            <div className="horiz-scroll w-full bg-white" ref={this.scrollRef}>
              <DesignerSmall
                className="scroll-item"
                width={window.innerWidth}
                viewBox={((733-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <EngineerSmall
                className="scroll-item"
                width={window.innerWidth}
                viewBox={((733-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <StudentSmall
                className="scroll-item"
                width={window.innerWidth}
                viewBox={((733-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
              <DesignerSmall
                className="scroll-item"
                width={window.innerWidth}
                viewBox={((733-window.innerWidth)/2) +" 0 " + window.innerWidth + " 496"}
              />
            </div>

            <div className="absolute bottom-2 left-1/2 inline-flex svgclass flex justify-center gap-2 mx-auto" style={{width:"200px"}}>
              <svg height="50" width="50" className="" data-tag="1">
                <circle
                  data-tag="two"
                  className={
                    this.state.splashscreen == 1
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 "
                  }
                  cx="20"
                  cy="30"
                  r="1.5vh"
                />
              </svg>
              <svg height="50" width="50" className="" data-tag="2">
                <circle
                  className={
                    this.state.splashscreen == 2
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 "
                  }
                  cx="20"
                  cy="30"
                  r="1.5vh"
                />
              </svg>
              <svg height="50" width="50" className="" data-tag="3">
                <circle
                  className={
                    this.state.splashscreen == 3
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 "
                  }
                  cx="20"
                  cy="30"
                  r="1.5vh"
                />
              </svg>
              <svg height="50" width="50" className="" data-tag="4">
                <circle
                  className={
                    this.state.splashscreen == 4
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 "
                  }
                  cx="20"
                  cy="30"
                  r="1.5vh"
                />
              </svg>
            </div>
          </div>

          <div
            className="bg-gray-100 w-full py-4 px-2 md:px-10 "
            style={{ height: window.innerHeight * (3 / 10) }}
          >
            <div
              className="flex gap-2 md:gap-6 lg:gap-10 h-24 w-full justify-center"
              style={{ height: window.innerHeight * (3 / 10) }}
            >
              <div className=" m-x-10 text-center md:w-1/4 ">
                <h1 className="text-xl text-red-500 font-bold ">Designer</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
              <div className="m-x-10 text-center md:w-1/4 ">
                <h1 className="text-xl text-green-500 font-bold"> Engineer</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
              <div className="m-x-10 text-center md:w-1/4">
                <h1 className="text-xl text-blue-500 font-bold"> Student</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePageSmallScreen;
