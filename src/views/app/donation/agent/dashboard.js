import React from "react";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import Card from "components/dashboard/Card";

const Index = ({ intl }) => {
  const { messages } = intl;
  return (
    <>
      <h4 className="py-3 breadcrumb-wrapper mb-4">
        <span className="text-muted fw-light">{messages["app.home"]} /</span>{" "}
        {messages["app.donation.home"]}
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
        <Card
          type="simple"
          title="ثبت خیرین"
          icon="bx bx-edit"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="مشاهده خیرات"
          icon="bx bx-cube"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="درخواست خیرات"
          icon="bx bx-git-pull-request"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="گزارش"
          icon="bx bx-message-square-detail"
          iconClass="bg-label-info"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"></div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"></div>
        <Card
          type="simple"
          title="دریافت کمک"
          icon="bx bx-donate-heart"
          iconClass="bg-label-info"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="گزارش مالی"
          icon="bx bx-chart"
          iconClass="bg-label-primary"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
      </div>
    </>
  );
};

export default injectIntl(Index);
