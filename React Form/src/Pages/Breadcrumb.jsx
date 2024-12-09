import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-400">/</span>}
            <Link
              to={path.link}
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
