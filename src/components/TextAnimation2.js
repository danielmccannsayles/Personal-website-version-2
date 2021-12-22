import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import React, { useRef, useEffect, useState, useMemo } from "react";



function TextAnimation2() {


    return (
 
        <Timeline
          target={
            <div style={{ width: '100px', height: '100px', background: '#ccc', zIndex: '0' }} />
          }
        >
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
          <Tween to={{ x: '200px' }} />
          <Tween to={{ rotation: 180 }} position="+=1" />
        </Timeline>

    );
  }
  
  export default TextAnimation2;
  