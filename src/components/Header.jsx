import Button from "./Button"

const Header = ({title, onAdd, showForm}) => {

  const onClick = () => {
    console.log("click")
  }

  return (
    <header className="header">
     <h1> {title} </h1>
     < Button  text={showForm ? 'Close' : 'Add' } color={showForm ? 'red' : 'green' }  onClick={onAdd}/>
    </header>
  )
}

export default Header