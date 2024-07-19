import logo from './logo.svg';
import './App.css';



export function MyButton(){
  return(
    <button>
      More Information
    </button>
  )
}

export default function MyApp(){
  return (
    <div style={{
      display: 'flex',
      justifycontent: 'center',
      height: '100vh'
    }}>
      <h1>Welcome to the Carbon Footprint Calculator</h1>
      {MyButton}
    </div>
    
  )
}



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


