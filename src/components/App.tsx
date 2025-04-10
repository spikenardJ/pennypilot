import React from "react";
import Navbar from "./Navbar";
import HomeDashboard from "./HomeDashboard";
import BudgetPlanner from "./BudgetPlanner";
import TaxPrep from "./TaxPrep";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/tax-prep" element={<TaxPrep />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;