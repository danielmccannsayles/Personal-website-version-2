import "./App.css";
import "./index.css";
import NavigationBar from "./components/navigationbar";
import HomePage from "./Sections/Homepage";
import React from "react";
import FinishedProjects from "./Sections/Finished";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import FinishedProjectsLarge from "./Sections/FinishedLarge";
import HomePageSmallScreen from "./Sections/HomePageSmallScreen";

import _ from "underscore"; //used to slow down mouse events

//add import statements above this - it doesn't autocorrect below for SOME WEIRD REASON!!!!!!
import NavigationBarSmall from "./components/NavigationBarSmall";
import CurrentProjects from "./Sections/Current";

window.onbeforeunload = function () {
  //IMPORTANT - ON REFRESH IT MOVES THE PAGE TO THE TOP
  window.scrollTo(0, 0);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollThrottled = _.throttle(this.handleScroll, 20);

    let size =
      window.innerWidth < 768
        ? "small"
        : window.innerWidth < 1280
        ? "medium"
        : "large"; //small, medium or large correspond w/ md: and xl: breakpoint tailwind
    let homePageSize =
      window.innerWidth < 733
        ? "small"
        : window.innerWidth < 1140
        ? "medium"
        : "large";

    this.state = {
      yPos: 0,
      scrollLock: true,
      scrollPos: 0,
      deltaY: 0,
      scrollingDiv: 0,
      screenSize: size,
      homePageScreenSize: homePageSize,
    };
    this.startingWidth = window.innerWidth;
    //starting width is only ran once. It should never be changed. It determines whether mobile view will be loaded
    //It should improve the smoothness of the mobile version.
  }

  handleResize = () => {
    //arrow function needed since we use 'this' keyword
    let size =
      window.innerWidth < 768
        ? "small"
        : window.innerWidth < 1280
        ? "medium"
        : "large"; //small, medium or large correspond w/ md: and xl: breakpoint tailwind
    this.setState({ screenSize: size }); //screenSize is used to redraw the project section

    let homePageSize =
      window.innerWidth < 733
        ? "small"
        : window.innerWidth < 1140
        ? "medium"
        : "large";
    this.setState({ homePageScreenSize: homePageSize });
  };

  componentDidMount() {
    this._isMounted = true; //including this to prevent error: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    // if (window.innerWidth <733){
    //   window.addEventListener('scroll', this.handleScroll); //if it's small screen the animation relies on unthrottled scroll
    // }
    // else{
    window.addEventListener("scroll", this.handleScrollThrottled);
    // }
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScrollThrottled);
  }

  handleScroll(e) {
    this.setState({ yPos: window.scrollY });
  }

  render() {
    let fixAnimation = window.innerHeight / 2;
    return (
      <div style={{ backgroundColor: "whitesmoke" }}>
        {this.startingWidth < 733 ? (
          <>
            <NavigationBarSmall
              height={this.state.yPos < 30 ? "0px" : "75px"}
              displayName={this.state.yPos < fixAnimation ? "none" : "inline"}
              zBar={this.state.yPos > fixAnimation}
            ></NavigationBarSmall>

            <HomePageSmallScreen yPos={this.state.yPos}></HomePageSmallScreen>
          </>
        ) : (
          <>
            <HomePage
              yPos={this.state.yPos}
              screenSize={this.state.screenSize}
              homePageScreenSize={this.state.homePageScreenSize}
            ></HomePage>
            <NavigationBar
              yPos={this.state.yPos}
              screenSize={this.state.screenSize}
            ></NavigationBar>
          </>
        )}

        <CurrentProjects screenSize={this.state.screenSize}></CurrentProjects>
        
        {this.state.screenSize === "large" ? (
          <FinishedProjectsLarge
            screenSize={this.state.screenSize}
          ></FinishedProjectsLarge>
        ) : (
          <FinishedProjects
            screenSize={this.state.screenSize}
          ></FinishedProjects>
        )}

        <About screenSize={this.state.screenSize}></About>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
