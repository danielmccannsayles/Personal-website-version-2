import "./App.css";
import "./index.css";
import NavigationBar from "./components/navigationbar";
import HomePage from "./Sections/Homepage";
import React from "react";
import FinishedProjects from "./Sections/FinishedProjects";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import CurrentProjectsLarge from "./Sections/CurrentProjectsLarge";
import HomePageSmallScreen from "./Sections/HomePageSmallScreen";

import _ from 'underscore'; //used to slow down mouse events

//add import statements above this - it doesn't autocorrect below for SOME WEIRD REASON!!!!!!
import CurrentProjects from "./Sections/CurrentProjects";
import NavigationBarSmall from "./components/NavigationBarSmall";

window.onbeforeunload = function () { //IMPORTANT - ON REFRESH IT MOVES THE PAGE TO THE TOP
  window.scrollTo(0, 0);
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollThrottled=_.throttle(this.handleScroll, 20);
    
    let size = window.innerWidth<768?'small':window.innerWidth<1280?'medium':'large';  //small, medium or large correspond w/ md: and xl: breakpoint tailwind
    let homePageSize = window.innerWidth<733?'small':window.innerWidth<1140?'medium':'large';

    this.state = { yPos: 0, scrollLock:true, scrollPos:0, deltaY:0, scrollingDiv:0, screenSize:size, homePageScreenSize:homePageSize};
  }

  handleResize=()=>{ //arrow function needed since we use 'this' keyword
    let size = window.innerWidth<768?'small':window.innerWidth<1280?'medium':'large';  //small, medium or large correspond w/ md: and xl: breakpoint tailwind
    this.setState({screenSize: size}); //screenSize is used to redraw the project section
  
    let homePageSize = window.innerWidth<733?'small':window.innerWidth<1140?'medium':'large';
    this.setState({homePageScreenSize: homePageSize}); 

  }

  componentDidMount() {
    this._isMounted = true; //including this to prevent error: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

    window.addEventListener('scroll', this.handleScrollThrottled);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScrollThrottled);
  }


  handleScroll(e) {
    this.setState({ yPos: window.scrollY });
  }

  
  render() {
    let fixAnimation = (window.innerHeight/2); {/*I'm so dumb why did it take so long to think of this*/}
    return (
      <div style={{backgroundColor:'whitesmoke'}}> 

        {this.state.homePageScreenSize == 'small'?<>
        <NavigationBarSmall
        height={this.state.yPos<fixAnimation?this.state.yPos/(5.38):75 +"px"}
        display={(this.state.yPos<fixAnimation|| window.innerWidth<768)?'none':'block'}
        displayName={this.state.yPos<fixAnimation?'none':'block'}
        zBar={this.state.yPos>fixAnimation}>
        </NavigationBarSmall> 
        
         <HomePageSmallScreen yPos={this.state.yPos}></HomePageSmallScreen>
         </>:
        <HomePage yPos={this.state.yPos} screenSize={this.state.screenSize} homePageScreenSize={this.state.homePageScreenSize}></HomePage>
        }

        {this.state.homePageScreenSize =='small'?'':
        <NavigationBar yPos={this.state.yPos} screenSize={this.state.screenSize}></NavigationBar>
        }
        
        {this.state.screenSize == 'large'?
        <CurrentProjectsLarge screenSize={this.state.screenSize}></CurrentProjectsLarge>:
        <CurrentProjects screenSize={this.state.screenSize}></CurrentProjects>

        }
        <FinishedProjects screenSize={this.state.screenSize}></FinishedProjects>

        <About></About>
        <Contact></Contact>
        {/* </Parallax> */}
        
        
      </div>
    );
  }
}

export default App;
