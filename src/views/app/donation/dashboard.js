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
      <div className="row mb-4">
        <Card
          type="statistic"
          title="خیرین فعال          "
          icon="bx bx-user"
          url="/app/donation/fund/list/5"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="جمع کمک"
          icon="bx bx-dollar"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="دریافت کمک روزانه          "
          icon="bx bx-wallet"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="هزینه ها          "
          icon="bx bx-cart"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
      </div>

      <div className="row">
        <Card
          type="simple"
          title="ثبت خیرین"
          icon="bx bx-edit"
          url="/app/donation/fund/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
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
        <Card
          type="simple"
          title="محله ها"
          icon="bx bx-edit"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="مدیریت سریال"
          icon="bx bx-chart"
          iconClass="bg-label-info"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="اعزام محله"
          icon="bx bx-chart"
          iconClass="bg-git-pull-request"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="گزارش اعزام"
          icon="bx bx-cube"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
      </div>
      <div className="row">
        <Card
          type="simple"
          title="سرفصل کمک"
          icon="bx bx-edit"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="پرسنل رابط"
          icon="bx bx-cube"
          iconClass="bg-label-info"
          url="/app/donation/agent"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />

      </div>
    </>
  );
};

export default injectIntl(Index);
