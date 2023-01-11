import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentEdit from "./ApartmentEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockApartments from "../mockApartments"

describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    render(
        <MemoryRouter initialEntries={["/apartmentedit/1"]}>
          <Routes>
            <Route path="apartmentedit/:id" element={<ApartmentEdit apartments={mockApartments} />} />
          </Routes>
        </MemoryRouter>,
    )
})
it("renders without crashing", () => {})
it("displays a page if user is not logged in", () => {
  expect(screen.getByText("Can't update apartments without signing in")).toBeInTheDocument()
})
})