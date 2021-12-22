import React from "react";
import TextAnimation from "../components/TextAnimation";

class HomePageSmallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("test 100");
  }

  render() {
    return (
      <>

        <div className="flex h-screen  items-center justify-evenly" style={{scrollSnapStop: 'always', background:"linear-gradient(to top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))"}}
        id="HomePage">
          <TextAnimation timescale= {1} end={this.props.yPos > 150} ></TextAnimation>
        </div>
       
      </>
    );
  }
}

export default HomePageSmallScreen;
