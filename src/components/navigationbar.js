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

function NavigationBar(props){
    let twoThirds = (2/3)*window.innerHeight;
    let oneThird = (1/3)*window.innerHeight;
    let nineTenths = (9/10)*window.innerHeight; //navbar is one tenth high, so this offsets it

    let displayName=(props.yPos>twoThirds)?'inline':'none';
    let displayNav=(props.yPos>twoThirds && props.screenSize!='small')?'inline':'none'; 
    let displayArrow=(props.yPos<oneThird)?'inline':'none';

    let displayInner=(props.yPos>oneThird)?'flex':'none';
    let innerNav = {...inner, display:displayInner};

    function onClick(){
        gsap.to(window, {duration: 1, scrollTo: nineTenths+1});
    }

    function onNavigate(string){
        let yOffset=80;
        if (string ==='#Homepage')
            yOffset=0;
            
        gsap.to(window, {duration: 1, scrollTo:{y:string, offsetY:yOffset}}); //offsetY:75px
    }

    return(

        <div style={{height:window.innerHeight*(1.1/10), position:'sticky', position: '-webkit-sticky', top:'0', zIndex:'100', }} className="w-screen bg-black text-white sticky flex justify-center"  >
            <p style={{ display:displayArrow}} className="text-center w-full hover:bg-gray-900 text-white cursor-pointer" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height={window.innerHeight*(1.1/10)} fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
            </p>
            <div style={innerNav} className="md:gap-10 flex ">
                <button className="text-xl link-white cursor-pointer" style={{display: displayNav, }} onClick={()=>onNavigate("#CurrentProjects")} >Current</button>
                <button className="text-xl link-white cursor-pointer" style={{display: displayNav, }} onClick={()=>onNavigate("#FinishedProjects")}>Past</button>
                <button className="text-2xl text-white w-60 cursor-pointer" style={{display: displayName, }} onClick={()=>onNavigate("#HomePage")} >Daniel McCann-Sayles</button>
                <button className="text-xl link-white cursor-pointer" style={{display: displayNav, }} onClick={()=>onNavigate("#AboutMe")}>About</button>
                <button className="text-xl link-white cursor-pointer" style={{display: displayNav, }} onClick={()=>onNavigate("#Contact")}>Contact</button>
            </div>
        </div>
    );
}

export default NavigationBar;