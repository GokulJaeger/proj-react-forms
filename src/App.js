// import logo from './logo.svg';
import './App.css';
// import StudentReg from './components/reference/StudentReg';
// import StyleColor from './components/labelstyle/StyleColor';
// import Weather from './components/weather/Weather';
import StudentForm from'./components/studentform/StudentForm';

function App() {

  // const handleUserAddition = (e) => {
  //   console.log("I am from Home App");
  //   console.log(e);
  // }

  // const dte = new Date();
  // const td = dte.toISOString();
  // const user = [
  //   {fname:"Gokul", lname:"Jaeger"}
  // ];
  // const frm = "From -App Component";

  return (
    <div className="App">
      {/* <StyleColor da={user} dt={td} dl={frm}/>
      <br/>
      <Weather/>
      <br/> */}
      {/* <StudentReg onUserAdd={handleUserAddition} /> */}
      <StudentForm/>
    </div>
  );
}

export default App;
