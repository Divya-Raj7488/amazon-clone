
import './App.css';
import NavBar from "./components/header/NavBar"
import MainPage from "./components/homepage/MainPage"
import FooTer from "./components/footer/FooTer"
import NavBar2 from './components/header/NavBar2';


function App() {
  return (
   <div>
  <NavBar/>
  <NavBar2/>
  <MainPage/>
  <FooTer/>
    </div>
  );
}

export default App;
