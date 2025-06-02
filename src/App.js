import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="">
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
