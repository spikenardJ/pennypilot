import React from "react";
import Navbar from "./components/Navbar";
import HomeDashboard from "./components/HomeDashboard";
import BudgetPlanner from "./components/BudgetPlanner";
import TaxPrep from "./components/TaxPrep";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/tax-prep" element={<TaxPrep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
