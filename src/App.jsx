
import './App.css'

function Header(){
  return (
    <>  
      <h1>Header Component</h1>
      <p>This is the header section of the app.</p>
    </>
  )
}
function Mybutton(){
  return (
    <button>Click me</button>
  )
}
 export default  function Myapp (){
  return (
    <div>
     <h1>Toi la thuy day nha</h1>
     <Header />
     <Mybutton />
    </div>
  )
 }


