import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CustomerInfo from "./CustomerInfo";
import Footer from "./Footer";
import Header from "./Header"

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CustomerInfo" element={<CustomerInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
