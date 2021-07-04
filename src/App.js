// import logo from './logo.svg';
import './App.css';
// import DemoStd from './components/DemoStd';
// import StudentReg from './components/StudentReg';
// import StyleColor from './components/StyleColor';
// import Weather from './components/Weather';
import StudentForm from './components/StudentForm';

function App() {

  // const handleUserAddition = (e) => {
  //   console.log("I am from App.js");
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
      {/* <StyleColor data={user} ts={td} ln={frm}/> */}
      {/* <br/> */}
      {/* <DemoStd/> */}
      <br/>
      {/* <Weather/> */}
      {/* <br/>
      <br/> */}
      {/* <StudentReg onUserAdd={handleUserAddition} /> */}
      <StudentForm/>
    </div>
  );
}

export default App;
