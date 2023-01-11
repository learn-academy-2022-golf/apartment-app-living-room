import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/apartmentindex">Apartment Index</NavLink>
          {logged_in && (

            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
        )}
        {!logged_in && (
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
        )}
        {!logged_in && (
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
        )}
        {logged_in && (
            <NavLink to="/protectedindex" className="nav-link">
              My listings
            </NavLink>
        )}
        {logged_in && (
            <NavLink to="/apartmentnew" className="nav-link">
              Make a new apartment
            </NavLink>
        )}
        </NavItem>
        
      </Nav>
    </>
  );
};

export default Navigation;
