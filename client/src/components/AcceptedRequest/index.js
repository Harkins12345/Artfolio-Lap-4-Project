import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

const AcceptedRequest = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threedots" />
    </a>
  ));
  return (
    <div className="accepted-container my-4">
      <div className="row name-dropdown">
        <div className="col-6">
          <h3> USERNAME </h3>
        </div>
        <div className="col-6 drop-down-tg">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} />
            <Dropdown.Menu size="sm" title="">
              <Dropdown.Item>Delete</Dropdown.Item>
              <Dropdown.Item>Report</Dropdown.Item>
              <Dropdown.Item>Block</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="gigs-desc-chat">
            <p className="requests-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris.
            </p>
            <button className="edit-button">
              <i className="fa-solid fa-message"></i> Chat
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="request-details">
            <span> Location </span>
            <span> Date/Time </span>
            <span> Duration </span>
            <span> Genre </span>
            <span> Budget </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedRequest;
