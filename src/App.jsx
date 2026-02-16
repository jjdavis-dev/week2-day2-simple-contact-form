import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={styles.navbar}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </nav>

      <div style={styles.page}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "16px",
    padding: "14px 18px",
    borderBottom: "1px solid #ccc",
  },
  link: {
    textDecoration: "none",
    fontWeight: "600",
  },
  page: {
    padding: "18px",
  },
};
