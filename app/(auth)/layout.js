import React from "react";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return <div className="flex justify-center pt-20">{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
