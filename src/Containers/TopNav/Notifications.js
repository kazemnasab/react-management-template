import React from "react";

export default function Notifications() {
  return (
    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <i className="bx bx-bell bx-sm"></i>
        <span className="badge bg-danger rounded-pill badge-notifications">
          5
        </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end py-0">
        <li className="dropdown-menu-header border-bottom">
          <div className="dropdown-header d-flex align-items-center py-3">
            <h5 className="text-body mb-0 me-auto secondary-font">اعلان‌ها</h5>
            <a
              className="dropdown-notifications-all text-body"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="علامت خوانده شده به همه"
            >
              <i className="bx fs-4 bx-envelope-open"></i>
            </a>
          </div>
        </li>
        <li className="dropdown-notifications-list scrollable-container">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action dropdown-notifications-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <img
                      src="assets/img/avatars/1.png"
                      alt="true"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی با</h6>
                  <p className="mb-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                  <small className="text-muted">1 ساعت قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-danger">
                      اک
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                  <p className="mb-1">لورم ایپسوم متن ساختگی با</p>
                  <small className="text-muted">12 ساعت قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <img
                      src="assets/img/avatars/2.png"
                      alt="true"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن</h6>
                  <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی</p>
                  <small className="text-muted">1 ساعت قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-success">
                      <i className="bx bx-cart"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                  <p className="mb-1">لورم ایپسوم متن ساختگی با تولید</p>
                  <small className="text-muted">1 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <img
                      src="assets/img/avatars/9.png"
                      alt="true"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                  <p className="mb-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                  </p>
                  <small className="text-muted">2 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-success">
                      <i className="bx bx-pie-chart-alt"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                  <p className="mb-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                  <small className="text-muted">3 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <img
                      src="assets/img/avatars/5.png"
                      alt="true"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی با</h6>
                  <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی</p>
                  <small className="text-muted">4 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <img
                      src="assets/img/avatars/6.png"
                      alt="true"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                  <p className="mb-1">لورم ایپسوم متن ساختگی با تولید</p>
                  <small className="text-muted">5 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-warning">
                      <i className="bx bx-error"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                  <p className="mb-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                  </p>
                  <small className="text-muted">5 روز قبل</small>
                </div>
                <div className="flex-shrink-0 dropdown-notifications-actions">
                  <a className="dropdown-notifications-read">
                    <span className="badge badge-dot"></span>
                  </a>
                  <a className="dropdown-notifications-archive">
                    <span className="bx bx-x"></span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="dropdown-menu-footer border-top">
          <a className="dropdown-item d-flex justify-content-center p-3">
            مشاهده همه اعلان‌ها
          </a>
        </li>
      </ul>
    </li>
  );
}
