import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div
        className="container-fluid p-5"
        style={{ background: `#212121`, height: `280px` }}
      >
        <h5 className="text-light text-center">NEED ANYTHING ELSE?</h5>
        <p className="text-light text-center m-2">
          <i className="fa-brands fa-facebook m-1"></i>
          <i className="fa-brands fa-twitter m-1"></i>
          <i className="fa-brands fa-linkedin-in m-1"></i>
          <i className="fa-brands fa-youtube m-1"></i>
          <i className="fa-brands fa-github m-1"></i>
        </p>
        <p className="text-light text-center m-5">
          Copyright © Sylvia Aprillinda ∙ All the rights reserved ∙ Designed by
          Themewagon & Sauro Dalvi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
