import logo from './logo.svg';
import './App.css';


export function MyButton() {
  return (
    <button>
      Click me for more information
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to the Carbon Footprint Calculator</h1>
      {/* <MyButton /> */}
      
    </div>
  );
  }


export function Calculator() {
  return (
    <div>
      <iframe width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>
      
    </div>
  );
  }




// import React from 'react';
// import './Headers.css';
// custom-header {
//   font-size: 24 px; 
//   color: #333;
//   padding: 20px;
// }
// export default  Header; 



// document.write('<iframe width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>');

// <!-- HTML: Create a container for the iframe -->

// <div id="iframeContainer"></div>

// <!-- JavaScript: Dynamically create and append the iframe -->
// <script>
  // Get the container element
  // let container = document.getElementById("iframeContainer");

  // Create an iframe element
  // let iframe = document.createElement("iframe");
  // let t = document.createTextNode("Hello, Kayla");
  // iframe.appendChild(t);
  // Set attributes for the iframe
  // iframe.width = "710";
  // iframe.height = "1300";
  // iframe.frameBorder = "0";
  // iframe.marginWidth = "0";
  // iframe.marginHeight = "0";
  // iframe.scrolling = "no";
  // iframe.src = "https://calculator.carbonfootprint.com/calculator.aspx";

  // Append the iframe to the container
  // container.appendChild(iframe);

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

// export default App;

// function BillyBobJoe() {
//   return (
//     <div className="stupid">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default BillyBobJoe;
