import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/desktopone">DesktopOne</Link>
        </li>
        <li>
          <Link to="/desktoptwo">DesktopTwo</Link>
        </li>
        <li>
          <Link to="/desktopthree">DesktopThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
