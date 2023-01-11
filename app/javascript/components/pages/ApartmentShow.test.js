import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentShow from "./ApartmentShow";
import { MemoryRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import apartments from "../mockApartments";


describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const apartments = [
      {
        id: 1,
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
      },
      {
        id: 2,
        street: "15 Yemen Road",
        city: "Yemen",
        state: "Yemen",
        manager: "Mr. Bing",
        email: "bing@example.com",
        price: 1000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://i.pinimg.com/736x/4f/c1/ce/4fc1ce196ea1412f670d477a026ba2c6--saudi-arabia-drawing-reference.jpg",
      },
    ];
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route
            path="/apartmentshow/:id"
            element={<ApartmentShow apartments={apartments} />} />
        </Routes>
      </MemoryRouter>
    );
    const address = screen.getByText(
      "4 Privet Drive, Little Whinging,Surrey"
    );
    expect(address).toBeInTheDocument();
    expect(screen.getAllByText("Back to Apartments")).toBeTruthy()
  });
});
