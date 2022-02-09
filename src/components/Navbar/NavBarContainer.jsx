import React from "react";
import { connect } from "react-redux";
import { Navbar } from "./Navbar";

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};
let mapDispatchToProps = () => {
  return {};
};
export const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
