const Button = ({text, color, onClick}) => {
    // const onClick  = () => {
    //     console.log("click")
    // }
    return (
     <button onClick={onClick} style={{backgroundColor: color}} className="btn"> {text} </button>
    )
  }
  
  export default Button