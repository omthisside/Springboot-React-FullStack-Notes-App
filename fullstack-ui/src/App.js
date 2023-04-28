import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddNote from './users/AddNote';
import EditNote from './users/EditNote';
import ViewNote from './users/ViewNote';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addNote" element={<AddNote />} />
          <Route exact path="/editnote/:id" element={<EditNote />} />
          <Route exact path="/viewnote/:id" element={<ViewNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
