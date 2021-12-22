//functional lil button uh yeah

function ButtonTrigger(props) {
  return (
    <button
      className="class=bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded"
      onClick={props.handleClick}
    >
      Click Me
    </button>
  );
}

export default ButtonTrigger;
