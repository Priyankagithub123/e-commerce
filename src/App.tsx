import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customer = lazy(() => import("./pages/Customer"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/pages/Dashboard" element={<Dashboard />} />
          <Route path="/pages/Customer" element={<Customer />} />
          <Route path="/pages/Product" element={<Product />} />
          <Route path="/pages/Transaction" element={<Transaction />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
