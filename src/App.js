import logo from './logo.svg';
import './App.css';

function App() {

setInterval(()=>{

  let date=new Date();
  //console.log(date)
  let a=document.querySelector(".App")
  let clock=date.toLocaleTimeString();
  a.innerHTML=`<h1>Time: ${clock}</h1> <br/><h1> Date: ${date.toDateString()}</h1>`
},1000)

  return (
    <div className="App">
    </div>
  );
}

export default App;
