import React from "react"
import Nav from "./Navbar"
import Books from "./Components/Books";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          
        
        <Route path="/books" exact element={<Books/>} />
         
    
        </Routes>
      </div>
    </Router>
    
  )
}

export default App