import React from "react";
import { injectIntl } from "react-intl";

const Index = ({ intl }) => {
  const { messages } = intl;
  return (
    <>
      <h4 className="py-3 breadcrumb-wrapper mb-4">
        <span className="text-muted fw-light">{messages["app.home"]} /</span>{" "}
        {messages["app.baker.home"]}
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
                    <small className="text-muted">نانوایی فعال</small>
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
                    <small className="text-muted">نان خیرات شده</small>
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
                    <small className="text-muted">مبلغ دریافتی</small>
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
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">گزارش سود</h5>
            </div>
            <div className="card-body d-flex align-items-end justify-content-between">
              <div className="d-flex justify-content-between align-items-center gap-3 w-100">
                <div className="d-flex align-content-center">
                  <div
                    className="chart-report"
                    data-color="danger"
                    data-series="25"
                  ></div>
                  <div className="chart-info ms-2">
                    <h5 className="mb-0">12k تومان</h5>
                    <small className="text-muted">1400</small>
                  </div>
                </div>
                <div className="d-flex align-content-center">
                  <div
                    className="chart-report"
                    data-color="info"
                    data-series="50"
                  ></div>
                  <div className="chart-info ms-2">
                    <h5 className="mb-0">64k تومان</h5>
                    <small className="text-muted">1401</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header pb-2">
              <h5 className="card-title mb-0">ثبت نام</h5>
            </div>
            <div className="card-body pb-2">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div>
                  <div className="d-flex align-content-center align-items-center">
                    <h5 className="mb-0">58.4k</h5>
                    <i className="bx bx-chevron-up text-success"></i>
                  </div>
                  <small className="text-success">12.8%</small>
                </div>
                <div id="registrationsBarChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">گزارش درآمد</h5>
            </div>
            <div className="card-body d-flex align-items-end justify-content-between">
              <div className="d-flex align-items-end justify-content-between align-items-center gap-3 w-100">
                <div className="d-flex align-content-center">
                  <div
                    className="chart-report"
                    data-color="primary"
                    data-series="65"
                  ></div>
                  <div className="chart-info ms-2">
                    <h5 className="mb-0">28k تومان</h5>
                    <small className="text-muted">1400</small>
                  </div>
                </div>
                <div className="d-flex align-content-center">
                  <div
                    className="chart-report"
                    data-color="success"
                    data-series="85"
                  ></div>
                  <div className="chart-info ms-2">
                    <h5 className="mb-0">82k تومان</h5>
                    <small className="text-muted">1401</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header pb-2">
              <h5 className="card-title mb-0">بازدیدها</h5>
            </div>
            <div className="card-body pb-2">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div>
                  <div className="d-flex align-content-center align-items-center">
                    <h5 className="mb-0">58.4k</h5>
                    <i className="bx bx-chevron-up text-success"></i>
                  </div>
                  <small className="text-success">12.8%</small>
                </div>
                <div id="visitsBarChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-info">
                  <i className="bx bx-edit fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">پست‌های جدید</span>
              <h2 className="mb-n3">48</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-warning">
                  <i className="bx bx-dock-top fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">فایل‌های پیوست</span>
              <h2 className="mb-n3">17</h2>
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
              <span className="d-block mb-1 text-nowrap">دیدگاه‌ها</span>
              <h2 className="mb-n3">29</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="bx bx-cube fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">فروش‌ها</span>
              <h2 className="mb-n3">72</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-success">
                  <i className="bx bx-purchase-tag fs-3"></i>
                </span>
              </div>
              <span className="d-block mb-1 text-nowrap">خرید</span>
              <h2 className="mb-n3">65</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="avatar avatar-md mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-danger">
                  <i className="bx bx-cart fs-3"></i>
                </span>
              </div>

              <span className="d-block mb-1 text-nowrap">سفارش</span>
              <h2 className="mb-n3">40</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-header d-flex align-items-start justify-content-between">
              <div className="m-0 me-2">
                <h5 className="card-title mb-0">ثبت نام ها</h5>
                <small className="text-muted primary-font">
                  ورود جدید در یک روز
                </small>
              </div>
              <div className="d-flex flex-row align-items-center gap-2 primary-font">
                <h5 className="mb-0">245k</h5>
                <span className="badge bg-label-success">+32%</span>
              </div>
            </div>
            <div className="card-body">
              <div id="registrationsChart"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-md-0">
          <div className="card">
            <div className="card-header d-flex align-items-start justify-content-between">
              <div className="m-0 me-2">
                <h5 className="card-title mb-0">هزینه‌ها</h5>
                <small className="text-muted primary-font">
                  مخارج در یک روز
                </small>
              </div>
              <div className="d-flex flex-row align-items-center gap-2 primary-font">
                <h5 className="mb-0">86k</h5>
                <span className="badge bg-label-danger">-58%</span>
              </div>
            </div>
            <div className="card-body">
              <div id="expensesChart"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-0">
          <div className="card">
            <div className="card-header d-flex align-items-start justify-content-between">
              <div className="m-0 me-2">
                <h5 className="card-title mb-0">کاربران</h5>
                <small className="text-muted primary-font">
                  تعداد کاربران در یک روز
                </small>
              </div>
              <div className="d-flex flex-row align-items-center gap-2 primary-font">
                <h5 className="mb-0">615k</h5>
                <span className="badge bg-label-success">+67%</span>
              </div>
            </div>
            <div className="card-body">
              <div id="usersChart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default injectIntl(Index);
