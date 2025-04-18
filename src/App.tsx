// import { AuthProvider } from "./context/auth";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BudgetPlanner from "./components/BudgetPlanner";
import TaxPrep from "./components/TaxPrep";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/tax-prep" element={<TaxPrep />} />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
