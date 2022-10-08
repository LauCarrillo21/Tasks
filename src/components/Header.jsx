import Button from "./Button"

const Header = ({title, onAdd, showForm}) => {

  const onClick = () => {
    console.log("click")
  }

  return (
    <header className="header">
     <h1> {title} </h1>
     < Button  text={showForm ? 'Close' : 'Add a task' } color={showForm ? '#870000' : '#302e2e' }  onClick={onAdd}/>
    </header>
  )
}

export default Header