import ViewProfile from './ViewProfile';
import ViewPackage from './ViewPackage';
import About from './About'
import Services from './Services';
import Navigation from './Navigation';
import './App.css';
import Restaurant from './Restaurant';
import{
  Routes,
  Route, 
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navigation/>
      
      <Routes>

        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/view profile'element={<ViewProfile/>}></Route>
        <Route path='/view package'element={<ViewPackage/>}></Route>
        <Route path='/'element={<Restaurant/>}></Route>
      </Routes> 
    </div>


  );
}

export default App;
