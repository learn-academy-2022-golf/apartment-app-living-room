import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedIndex from "./ProtectedIndex"
import apartments from "../mockApartments"
import { BrowserRouter, Routes, Route } from "react-router-dom"


describe("<ProtectedIndex />", () => {
    const div = document.createElement("div");
    it("renders a card for each apartment", () => {
        const current_user = {
            id: 2
        } 
      render(
        <BrowserRouter>
          <ProtectedIndex apartments={apartments} current_user={current_user}/>, div
        </BrowserRouter>
      );
      apartments.forEach((apartment) => {
        const apartmentName = screen.getAllByText(apartment.pets);
        expect(apartmentName[0]).toBeInTheDocument();
      });
    });
  });