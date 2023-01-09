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
          title="نانوایی ها"
          icon="bx bx-user"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="اداره یا مسجد"
          icon="bx bx-dollar"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="رابطین"
          icon="bx bx-wallet"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
        <Card
          type="statistic"
          title="توزیع کارت "
          icon="bx bx-cart"
          url="/app/donation/new"
          className="col-lg-3 col-md-6 col-sm-6 mb-4mb-4"
        />
      </div>

      <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-0 mb-4"></div>
        <Card
          type="simple"
          title="نانوایی ها"
          icon="bx bx-edit"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="اداره یا مسجد"
          icon="bx bx-donate-heart"
          iconClass="bg-label-info"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="رابطین"
          icon="bx bx-chart"
          iconClass="bg-label-primary"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"></div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"></div>
        <Card
          type="simple"
          title="توزیع کارت"
          icon="bx bx-edit"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="مالی"
          icon="bx bx-chart"
          iconClass="bg-label-info"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
        <Card
          type="simple"
          title="گزارش مالی"
          icon="bx bx-chart"
          iconClass="bg-git-pull-request"
          url="/app/donation/new"
          className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-4"
        />
      </div>
    </>
  );
};

export default injectIntl(Index);
