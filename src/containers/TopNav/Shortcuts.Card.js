import React from "react";
import { Link } from "react-router-dom";

export default function Index({ title, description, url, iconClass }) {
  return (
    <div className="dropdown-shortcuts-item col">
      <Link to={`${url}`}>
        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
          <i className={`bx ${iconClass} fs-4`}></i>
        </span>
        <div>
        {title}
        </div>
        <small className="text-muted mb-0">{description}</small>
      </Link>
    </div>
  );
}
