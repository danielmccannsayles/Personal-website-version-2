import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);
gsap.config({autoKillThreshold: 1}); //used to set auto kill threshhold

let inner = {
  width:"80%",
  height:"100%",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center",
  fontWeight:"bold",
  color:"white",
} 

const item = {
    textDecoration:"none",
    color:"white",
}

function NavigationBarSmall(props){

    function onNavigate(){
        gsap.to(window, {duration: 1, scrollTo:{y:0}}); //offsetY:75px
    }

    return(

        <div style={{height:props.height, position:'sticky', position: '-webkit-sticky', top:'0', zIndex:props.zBar?'100':'20'}} className="w-screen bg-black text-white sticky flex justify-center">
            <div style={inner} className="md:gap-10 flex ">
                <button className="text-2xl text-white w-60 cursor-pointer" style={{display: props.displayName, }} onClick={()=>onNavigate()} >Daniel McCann-Sayles</button>

            </div>
        </div>
    );
}

export default NavigationBarSmall;