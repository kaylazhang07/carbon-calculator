// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/NavbarElements";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";


export function MyButton(){
  return(
    <button>
      More Information
    </button>
  )
}

 function MyApp(){
  return (
    // <div>
    //   <h1>Welcome to the Carbon Footprint Calculator</h1>
    //   {/* {MyButton} */}
    // </div>
    <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route
                    path="/contact"
                    element={<Contact />}
                /> */}
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>

  )
}

export default MyApp;



export function Calculator(){
  return(
    <div><iframe width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }