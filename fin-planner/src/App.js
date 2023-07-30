import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CustomerInfo from './CustomerInfo';



function App() {
  return (
      <Router>
        <Routes>     
          <Route path="/" element={<HomePage />} />  
          <Route path="/CustomerInfo" element={<CustomerInfo />} />          
      </Routes>
    </Router>
  );
}

export default App;
