import React from "react";
import { Link } from "react-router-dom";
import "../../style/error/error.css"

const ErrorPage = () => {
  return (
    <div className="font d-flex align-items-center justify-content-center" style={{ minHeight: "calc(100vh - 72px)" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content text-center">
              <h1 style={{fontSize:"110px",lineHeight:"115px",letterSpacing:"3%"}}>404 Not Found</h1>
              <p className="mt-4">Your visited page not found. You may go home page.</p>
              <Link to="/" type="button" className="btn-errorPage mt-5">
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
