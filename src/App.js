import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
                <div className="header">
                    <Routes>
                        <Route path="/" element={<Header/>}/>
                    </Routes>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Content/>}/>
                    </Routes>
                </div>
         </div>
           <Routes>
                  <Route path='about' element={<About/>}/>
              </Routes>
      </Router>
  );
}

export default App;
