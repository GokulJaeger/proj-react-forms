// import logo from './logo.svg';
import './App.css';
// import Studentapiform from './components/StudentAPIForm/Studentapiform';
// import StudentReg from './components/reference/StudentReg';
// import StyleColor from './components/labelstyle/StyleColor';
// import Weather from './components/weather/Weather';
// import StudentForm from './components/studentform/StudentForm';
import StdRegistration from './components/StudentAPIForm/StdRegistraction';
// import Studentapiform from './components/StudentAPIForm/Studentapiform';

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
      {/* <div>
        <StyleColor data={user} ts={td} ln={frm} />
        <br />
      </div> */}
      {/* <div>
<Studentapiform/>
</div> */}
      {/* <div>
        <Weather />
        <br />
      </div> */}
      {/* <div>
<StudentReg onUserAdd={handleUserAddition} />
</div> */}
      {/* <div>
        <StudentForm />
      </div> */}
      <div>
        <StdRegistration />
      </div>
      {/* <Studentapiform/> */}
    </div>
  );
}

export default App;
