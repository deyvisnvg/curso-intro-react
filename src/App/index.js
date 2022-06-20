import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// import logo from './logo.svg';
// import './App.css';

function App() {



  // console.log('Render (antes del useffect)');

  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos]);

  // console.log('Render (despues del useffect)');

  return (
    // <p>{leopardo}</p>,
    <TodoProvider>
      <AppUI />
    </TodoProvider>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
