import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CustomerInfo from "./components/CustomerInfo";
import Footer from "./components/Footer";
import Header from "./components/Header"
import DebtPlan from "./components/DebtPlan";

function App() {
  return (
    <div className="Container Content">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CustomerInfo" element={<CustomerInfo />} />
          <Route path="/debtPlan" element={<DebtPlan />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
