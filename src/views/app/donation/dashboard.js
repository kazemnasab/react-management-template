import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <h4 className="py-3 breadcrumb-wrapper mb-4">
        <span className="text-muted fw-light">خانه /</span> مدیریت خیرات
      </h4>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-primary">
                      <i className="bx bx-user fs-4"></i>
                    </span>
                  </div>
                  <div className="card-info">
                    <h5 className="card-title mb-0 me-2 primary-font">
                      38,566
                    </h5>
                    <small className="text-muted">خیرین فعال</small>
                  </div>
                </div>
                <div id="conversationChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-warning">
                      <i className="bx bx-dollar fs-4"></i>
                    </span>
                  </div>
                  <div className="card-info">
                    <h5 className="card-title mb-0 me-2 primary-font">
                      53,659
                    </h5>
                    <small className="text-muted">جمع کمک</small>
                  </div>
                </div>
                <div id="incomeChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-success">
                      <i className="bx bx-wallet fs-4"></i>
                    </span>
                  </div>
                  <div className="card-info">
                    <h5 className="card-title mb-0 me-2 primary-font">
                      12,452
                    </h5>
                    <small className="text-muted">دریافت کمک روزانه</small>
                  </div>
                </div>
                <div id="profitChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded-circle bg-label-danger">
                      <i className="bx bx-cart fs-4"></i>
                    </span>
                  </div>
                  <div className="card-info">
                    <h5 className="card-title mb-0 me-2 primary-font">8,125</h5>
                    <small className="text-muted">هزینه‌ها</small>
                  </div>
                </div>
                <div id="expensesLineChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"></div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <Link to="/app/donation/new">
            <div className="card">
              <div className="card-body text-center">
                <div className="avatar avatar-md mx-auto mb-3">
                  <span className="avatar-initial rounded-circle bg-label-info">
                    <i className="bx bx-edit fs-3"></i>
                  </span>
                </div>
                <span className="d-block mb-1 text-nowrap">ثبت خیرین</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="bx bx-cube fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">مشاهده خیرات</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-danger">
                  <i className="bx bx-git-pull-request fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">درخواست خیرات</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-danger">
                  <i className="bx bx-message-square-detail fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">گزارش</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
        </div><div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <Link to="/donation/new">
            <div className="card">
              <div className="card-body text-center">
                <div className="avatar avatar-md mx-auto mb-3">
                  <span className="avatar-initial rounded-circle bg-label-info">
                    <i className="bx bx-donate-heart fs-3"></i>
                  </span>
                </div>
                <span className="d-block mb-1 text-nowrap">دریافت کمک</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="bx bx-chart fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">گزارش مالی</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
