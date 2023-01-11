import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import apartments from "../mockApartments";

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path="apartmentshow/:id" element={<ApartmentShow apartments={apartments} {...props} />} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByText("Back to Apartments")).toBeInTheDocument();

  });
});
