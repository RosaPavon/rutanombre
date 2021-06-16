import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Nombres() {
  const dcvsfondo=[
   "BOB, ",
    "PATRICIO, ",
    "ARENITA, ",
    "CALAMARDO, ",
    "BRUCE, ",
    "CLACK, ", 
    "DIANA, ",
    "BARRY, ",
    "OLIVER.",
   
  ];

  const personajillos = (i) => {
    return (
      <>
        {dcvsfondo[i]}
        </>
      
    );
  };

  return (
    <>
      <div>
        {personajillos(0)}
        {personajillos(1)}
        {personajillos(2)}
        {personajillos(3)}
        {personajillos(4)}
        {personajillos(5)}
        {personajillos(6)}
        {personajillos(7)}
        {personajillos(8)}
      </div>
    </>
  );
}



function Cabecera() {
  return (
    <header>
      <h1>Rutas en React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/inicio">Nombres</Link>
   
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {


  return (
      <BrowserRouter>
          <Cabecera />
              <Route path="/inicio">
              <Nombres />
          </Route>
      </BrowserRouter>
  );
}


export default App;
