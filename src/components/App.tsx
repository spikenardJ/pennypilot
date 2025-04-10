import { AuthProvider } from "../context/auth";
import React from "react";
import Navbar from "./Navbar";
import HomeDashboard from "./HomeDashboard";
import BudgetPlanner from "./BudgetPlanner";
import TaxPrep from "./TaxPrep";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/tax-prep" element={<TaxPrep />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;