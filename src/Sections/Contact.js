import favicon from "../assets/favicon.png"

function Contact() {
  return (
    <div className="bg-gradient-to-b from-purple-500 via-purple-900 to-gray-900 text-white p-8">
      <h1
        className="text-center font-size-lg pt-4 underline section-header text-xl"
        id="Contact"
        style={{ ScrollMarginTop: "75px" }}
      >
        Contact
      </h1>
      <div className="text-center mb-10 mt-10">
        If you have any questions, comments, or ideas, about my current or past projects please reach out!<div> Send me a message on <a className="text-gray-200 underline hover:text-white" target="_blank" href="https://linkedin.com/in/daniel-mccann-sayles">LinkedIn</a></div>
      </div>
      
       <div className="w-80 mx-auto my-20">
        <img src={favicon} className="w-60 h-60"/>
      </div> 
      <div className="relative text-gray-400">© Daniel McCann-Sayles</div>
    </div>
  );
}

export default Contact;
