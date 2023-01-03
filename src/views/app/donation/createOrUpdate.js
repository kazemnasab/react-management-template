import React from "react";
import { injectIntl } from "react-intl";

const Index = ({ intl }) => {
  const { messages } = intl;
  return (
    <div>
      <h4 className="py-3 breadcrumb-wrapper mb-4">
        <span className="text-muted fw-light">{messages["app.home"]} /</span> {messages["donation.home"]}
      </h4>
      <div className="card">{messages["donation.home"]}</div>
    </div>
  );
};
export default injectIntl(Index);
