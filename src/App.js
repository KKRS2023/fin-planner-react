import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CustomerInfo from "./components/CustomerInfo";
import Footer from "./components/Footer";
import Header from "./components/Header"

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
