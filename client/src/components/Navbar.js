import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light"
    style={{height:"8vh"}}>
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="https://csidmce.tech/"
          target={"_blank"}
          rel="noreferrer"
        >
          CSI-CATT-DMCE
        </a>
        <div>
          <Link
            className="btn btn-primary text-center"
            to="/register"
            role="button"
          >
           Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
