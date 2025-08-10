import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
