import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes'
import Footer from './components/template/Footer'
import Header from './components/template/Header'

function App() {
  return (
    <div className="main-container">
     <Header />
     <Router>
       <Routes />
     </Router>
     <Footer />
    </div>
  );
}

export default App;
