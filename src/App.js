// import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import StyleColor from './components/labelstyle/StyleColor';
import Weather from './components/weather/Weather';
import StudentForm from './components/studentform/StudentForm';
import StdRegistration from './components/StudentAPIForm/StdRegistraction';
import Studentapiform from './components/StudentAPIForm/Studentapiform';
import Home from './components/Home';

function App() {

  // const handleUserAddition = (e) => {
  //   console.log("I am from Home App");
  //   console.log(e);
  // }



  return (
    <Router>
      <div className="App">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/label'>Label</Link>
        </li>
        <li>
          <Link to='/weather'>Weather</Link>
        </li>
        <li>
          <Link to='/studentForm'>StudentForm</Link>
        </li>
        <li>
          <Link to='/stdRegistration'>StudentRegistration</Link>
        </li>
        <li>
          <Link to='/studentapiform'>StudentApiForm</Link>
        </li>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/label' exact component={StyleColor}></Route>
          <Route path='/weather' exact component={Weather}></Route>
          <Route path='/studentForm' exact component={StudentForm}></Route>
          <Route path='/stdRegistration' exact component={StdRegistration}></Route>
          <Route path='/studentapiform' exact component={Studentapiform}></Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
