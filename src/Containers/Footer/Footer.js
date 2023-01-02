import React from "react";

export default function Footer() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          طراحی شده برای
          <a
            href="https://vefaghsabz.ir/"
            target="_blank"
            className="footer-link fw-semibold"
          >
           بنیاد خیریه وفاق سبز علوی کشور
          </a>
        </div>
      </div>
    </footer>
  );
}
