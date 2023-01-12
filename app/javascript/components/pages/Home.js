import React from "react";
import { NavItem, NavLink } from "reactstrap";

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <h3>Homepage</h3>
      <div>
        <h1>Welcome!</h1>
        <p>
          Welcome to the apartment app! Enjoy browsing and may you find the home
          of your dreams! 😀
        </p>
      </div>
      {!logged_in && (
        <NavItem>
          <a href={sign_in_route} className="nav-link">
            Sign In
          </a>
        </NavItem>
      )}
      {!logged_in && (
        <NavItem>
          <a href={new_user_route} className="nav-link">
            Sign Up
          </a>
        </NavItem>
      )}
      {logged_in && (
        <NavItem>
          {/* {  change this link to go to the Protected Index} */}
          <NavLink href="/apartmentindex" className="nav-link">
            My Listings
          </NavLink>
        </NavItem>
      )}
      {logged_in && (
        <NavItem>
          <NavLink href="/apartmentindex" className="nav-link">
            View All Listings
          </NavLink>
        </NavItem>
      )}
    </>
  );
};

export default Home;
