import React from "react";
import { Link } from "react-router-dom";

export default function CardSimple({ title, url, className, icon, iconClass }) {
  return (
    <div className={className}>
      <Link to={url}>
        <div className="card">
          <div className="card-body text-center">
            <div className="avatar avatar-md mx-auto mb-3">
              <span
                className={`avatar-initial rounded-circle ${
                  iconClass ? iconClass : "bg-label-info"
                }`}
              >
                <i className={`${icon} fs-3`}></i>
              </span>
            </div>
            <span className="d-block mb-1 text-nowrap">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
