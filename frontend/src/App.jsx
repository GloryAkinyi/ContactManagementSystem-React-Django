
import { Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Pay from "./pages/Pay";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

function App() {

  return (

    <div>

      {/* ================= NAVIGATION BAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

        <div className="container-fluid">

          {/* Website Logo */}
          <Link to="/" className="navbar-brand fw-bold fs-4">
            MyReactApp
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarMenu">

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>

              <li className="nav-item">
                <Link to="/upload" className="nav-link">Upload Product</Link>
              </li>

              <li className="nav-item">
                <Link to="/pay" className="btn btn-success px-4">
                  Pay Now
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* ================= MAIN WEBSITE CONTENT ================= */}

      <main className="container-fluid my-4">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/upload" element={<Upload />} />

          <Route path="/pay" element={<Pay />} />

        </Routes>

      </main>


      {/* ================= WEBSITE FOOTER ================= */}

      <footer className="bg-dark text-white pt-5 pb-3 mt-5">

        <div className="container">

          <div className="row">

            {/* Company Information */}
            <div className="col-md-4 mb-4">

              <h4 className="fw-bold text-success">
                MyReactApp
              </h4>

              <p>
                Welcome to MyReactApp. We provide a simple and
                convenient platform for managing products,
                accessing services and making secure payments.
              </p>

            </div>


            {/* Quick Links */}
            <div className="col-md-4 mb-4">

              <h5 className="fw-bold">Quick Links</h5>

              <ul className="list-unstyled">

                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="text-white text-decoration-none">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="text-white text-decoration-none">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="/register" className="text-white text-decoration-none">
                    Create Account
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="text-white text-decoration-none">
                    Login
                  </Link>
                </li>

              </ul>

            </div>


            {/* Contact Information */}
            <div className="col-md-4 mb-4">

              <h5 className="fw-bold">Contact Information</h5>

              <p>Email: info@myreactapp.com</p>

              <p>Phone: +254 700 000 000</p>

              <p>Location: Nairobi, Kenya</p>

              <Link to="/contact" className="btn btn-outline-success">
                Get In Touch
              </Link>

            </div>

          </div>


          <hr className="border-secondary" />

          {/* Copyright */}
          <div className="text-center">

            <p className="mb-0">
              &copy; {new Date().getFullYear()} MyReactApp.
              All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>

  );

}

export default App;
