import ButtonTrigger from "./ButtonTrigger";



function Test(props){
    function onClick(){
        console.log("test");
    }
    
    return (
        <ButtonTrigger handleClick={onClick}></ButtonTrigger>
    )
}

export default Test;