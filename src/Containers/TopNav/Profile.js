import React from "react";

export default function Profile() {
  return (
    <li className="nav-item navbar-dropdown dropdown-user dropdown">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        data-bs-toggle="dropdown"
      >
        <div className="avatar avatar-online">
          <img
            src="assets/img/avatars/1.png"
            alt="true"
            className="rounded-circle"
          />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a
            className="dropdown-item"
            href="pages-account-settings-account.html"
          >
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <div className="avatar avatar-online mt-1">
                  <img
                    src="assets/img/avatars/1.png"
                    alt="true"
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <span className="fw-semibold d-block">جان اسنو</span>
                <small>مدیر</small>
              </div>
            </div>
          </a>
        </li>
        <li>
          <div className="dropdown-divider"></div>
        </li>
        <li>
          <a className="dropdown-item" href="pages-profile-user.html">
            <i className="bx bx-user me-2"></i>
            <span className="align-middle">پروفایل من</span>
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="pages-account-settings-account.html"
          >
            <i className="bx bx-cog me-2"></i>
            <span className="align-middle">تنظیمات</span>
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="pages-account-settings-billing.html"
          >
            <span className="d-flex align-items-center align-middle">
              <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
              <span className="flex-grow-1 align-middle">صورتحساب</span>
              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                4
              </span>
            </span>
          </a>
        </li>
        <li>
          <div className="dropdown-divider"></div>
        </li>
        <li>
          <a className="dropdown-item" href="pages-help-center-landing.html">
            <i className="bx bx-support me-2"></i>
            <span className="align-middle">راهنمایی</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages-faq.html">
            <i className="bx bx-help-circle me-2"></i>
            <span className="align-middle">سوالات متداول</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages-pricing.html">
            <i className="bx bx-dollar me-2"></i>
            <span className="align-middle">قیمت گذاری</span>
          </a>
        </li>
        <li>
          <div className="dropdown-divider"></div>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="auth-login-cover.html"
            target="_blank"
          >
            <i className="bx bx-power-off me-2"></i>
            <span className="align-middle">خروج</span>
          </a>
        </li>
      </ul>
    </li>
  );
}
