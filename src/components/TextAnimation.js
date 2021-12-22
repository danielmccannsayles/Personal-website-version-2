import gsap from "gsap";
import React, { useRef, useEffect, useState, useMemo } from "react";

function TextAnimation(props) {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  const [ref1, ref2, ref3, ref4, ref5, ref6] = [useRef(0), useRef(0), useRef(0), useRef(0), useRef(0), useRef(0) ]; //rewrite this to be cleaer if possible
  
  const [play, setPlay] = useState(true);

  useEffect(() => { //pattern - first ref vis, move all refs(ref1) up, make first ref invis while simalteaneously making second ref vis.
    //REF 2
    timeline.to(ref2.current, { //ref 2 vis
      opacity:1,
    })
    .to(ref1.current, { //REF 1
      y:"-=1.55em",
    }, ">+=1") //start this animation 2 seconds later
    .to(ref2.current, {//ref2 invis
      opacity:0,
    },"<") //runs parallel to other animation
    
    //REF 3
    .to(ref3.current, {  //ref3 vis
      opacity:1,
    }, "<") 
    
    .to(ref1.current, { //REF 1
      y:"-=1.55em",
    }, ">+=1") 
    .to(ref3.current, {//ref3 invis
      opacity:0,
    },"<")

    //REF 4
    .to(ref4.current, {//ref4 vis
          opacity:1,
        }, "<") 
    .to(ref1.current, { //REF 1
      y:"-=1.55em",
    }, ">+=1") 
    .to(ref4.current, {//ref4 invis
      opacity:0,
    },"<")

    //REF 5
    .to(ref5.current, {//ref5 vis
          opacity:1,
        }, "<") 
    
    .to(ref6.current, {
      opacity:0,
    }, ">+=1")


  }, []);

  useEffect(() => {
    if (props.end){
      timeline.progress(1);
    }else{
      timeline.progress(0);
    }
    timeline.timeScale(props.timescale).play();
    // if (play) {
    //   timeline.play();
    // } else {
    //   timeline.reverse();
    // }
    // console.log(play);
  }, [props.end]);

  return (
    <div className="z-20 absolute">
      <div className="relative right-9 top-7 text-white text-lg " ref={ref6}> I'm </div>
      <div ref={ref1} className="text-lg text-white z-20 text-left">
        <p ref={ref2} className="opacity-0">A Student</p>
        <p ref={ref3} className="opacity-0">An Engineer</p>
        <p ref={ref4} className="opacity-0">A Designer</p>
        <p ref={ref5} className="opacity-0" >Daniel McCann-Sayles</p>
      </div>
    </div>
  );
}

export default TextAnimation;
