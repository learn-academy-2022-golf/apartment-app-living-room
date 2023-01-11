import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentEdit from "./ApartmentEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import apartments from "../mockApartments";

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentedit/1"]}>
      <Routes>
      <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments}  {...props}/>} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<ApartmentEdit />", () => {
  it("has a form to update street, city, state, manager", () => {
    renderComponent()
    const formStreet = screen.getByText("Street");
    expect(formStreet.getAttribute("For")).toEqual("street");

    const formCity = screen.getByText("City");
    expect(formCity.getAttribute("For")).toEqual("city");

    const formState = screen.getByText("State");
    expect(formState.getAttribute("For")).toEqual("state");

    const formManager = screen.getByText("Manager");
    expect(formManager.getAttribute("For")).toEqual("manager");
  });

  it("displays a page if user is not logged in", () => {
    expect(
      screen.getByText("Can't update apartments without signing in")
    ).toBeInTheDocument();
  });
});

