import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedIndex from "./ProtectedIndex"

describe("<ProtectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedIndex />, div)
    expect(screen.getByText("CurrentApartmentIndex")).toBeInTheDocument()
  })
})