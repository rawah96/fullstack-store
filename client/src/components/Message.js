import React from "react";
// import { Alert } from "react-bootstrap";
const Message = ({ variant, children }) => {
  return <h1>{children}</h1>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;