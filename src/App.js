import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element= {<Login/>}></Route>   {/*Login Page */}
          <Route></Route>             {/*Seller Page */}
          <Route></Route>             {/*Buyer Page */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
