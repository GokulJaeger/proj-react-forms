// import logo from './logo.svg';
import './App.css';
// import StudentsForm from './components/StudentsForm';
import UserRegi from './components/UserRegi';
// import Weather from './components/Weather';

function App() {

  const handleUserAddition = (e) => {
    console.log("I am from App.js");
    console.log(e);
  }

  return (
    <div className="App">
      {/* <StudentsForm/> */}
      <UserRegi onUserAdd={handleUserAddition} />
      {/* <Weather/> */}
    </div>
  );
}

export default App;
