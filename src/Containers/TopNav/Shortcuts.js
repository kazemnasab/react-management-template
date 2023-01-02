import React from "react";

export default function Shortcuts() {
  return (
    <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <i className="bx bx-grid-alt bx-sm"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-end py-0">
        <div className="dropdown-menu-header border-bottom">
          <div className="dropdown-header d-flex align-items-center py-3">
            <h5 className="text-body mb-0 me-auto secondary-font">میانبرها</h5>
            <a
              className="dropdown-shortcuts-add text-body"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="افزودن میانبر"
            >
              <i className="bx bx-sm bx-plus-circle"></i>
            </a>
          </div>
        </div>
        <div className="dropdown-shortcuts-list scrollable-container">
          <div className="row row-bordered overflow-visible g-0">
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-calendar fs-4"></i>
              </span>
              <a href="/donation" className="stretched-link">
                خیرات برنامه
              </a>
              <small className="text-muted mb-0">مدیریت خیرات</small>
            </div>
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-food-menu fs-4"></i>
              </span>
              <a href="/baker" className="stretched-link">
                نانوایی ها برنامه
              </a>
              <small className="text-muted mb-0">مدیریت نانوایی</small>
            </div>
          </div>
          <div className="row row-bordered overflow-visible g-0">
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-user fs-4"></i>
              </span>
              <a href="app-user-list.html" className="stretched-link">
                برنامه کاربر
              </a>
              <small className="text-muted mb-0">مدیریت کاربران</small>
            </div>
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-check-shield fs-4"></i>
              </span>
              <a href="app-access-roles.html" className="stretched-link">
                مدیریت نقش‌‌ها
              </a>
              <small className="text-muted mb-0">مجوزها</small>
            </div>
          </div>
          <div className="row row-bordered overflow-visible g-0">
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-pie-chart-alt-2 fs-4"></i>
              </span>
              <a href="index.html" className="stretched-link">
                داشبورد
              </a>
              <small className="text-muted mb-0">پروفایل کاربر</small>
            </div>
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-cog fs-4"></i>
              </span>
              <a
                href="pages-account-settings-account.html"
                className="stretched-link"
              >
                تنظیمات
              </a>
              <small className="text-muted mb-0">تنظیمات حساب</small>
            </div>
          </div>
          <div className="row row-bordered overflow-visible g-0">
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-help-circle fs-4"></i>
              </span>
              <a
                href="pages-help-center-landing.html"
                className="stretched-link"
              >
                مرکز راهنمایی
              </a>
              <small className="text-muted mb-0">سوالات متداول و مقالات</small>
            </div>
            <div className="dropdown-shortcuts-item col">
              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                <i className="bx bx-window-open fs-4"></i>
              </span>
              <a href="modal-examples.html" className="stretched-link">
                مودال‌ها
              </a>
              <small className="text-muted mb-0">پاپ‌آپ‌های کاربردی</small>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
